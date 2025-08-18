"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const redis_1 = require("@upstash/redis");
const groq_sdk_1 = require("groq-sdk");
const multer_1 = __importDefault(require("multer"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const groq = new groq_sdk_1.Groq({
    apiKey: process.env.GROQ_API_KEY
});
console.log(process.env.GROQ_API_KEY);
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_ENDPOINT
});
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Only pdf files are allowed'));
        }
    }
});
const redis = redis_1.Redis.fromEnv();
function getAiGeneratedNotes(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const chatCompletion = yield groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: params,
                },
            ],
            model: "openai/gpt-oss-120b",
        });
        return chatCompletion.choices[0].message.content;
    });
}
function GenerateNotesPdf(text) {
    const doc = new pdfkit_1.default();
    doc.pipe(fs_1.default.createWriteStream('./notes/notes2.pdf'));
    doc.fontSize(12)
        .text(text, 10, 10, {
        width: 1000,
        align: 'justify'
    });
    doc.end();
}
function generateNotes() {
    return __awaiter(this, void 0, void 0, function* () {
        setInterval(() => __awaiter(this, void 0, void 0, function* () {
            try {
                const revisionTopic = yield redis.rpop("revision");
                if (revisionTopic !== null && revisionTopic.trim() !== '') {
                    console.log(`Processing: ${revisionTopic}`);
                    const notes = yield getAiGeneratedNotes(`generate notes for ${revisionTopic} in clean string format `);
                    const notesPdf = GenerateNotesPdf(String(`${notes}`));
                    console.log(notesPdf);
                }
            }
            catch (err) {
                console.log('Queue processing error', err);
            }
        }), 5000);
    });
}
generateNotes();
//generaing pedf from notes
app.listen(3002, () => {
    console.log(`listing on port number 3002`);
});
