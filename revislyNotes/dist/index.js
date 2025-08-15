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
const uuid_1 = require("uuid");
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const groq = new groq_sdk_1.Groq({
    apiKey: process.env.GROQ_API_KEY
});
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
    }
});
app.post('/upload-pdf', (req, res) => {
    console.log(req.body);
    try {
        const { userId, fileName, filePath } = req.body;
        if (!userId || (!fileName && !filePath)) {
            return res.status(400).json({
                error: 'userid and  file name or file path reqired'
            });
        }
        const fullFilePath = filePath || path_1.default.join(__dirname, 'uploads', fileName);
        // Check if file exists
        if (!fs_1.default.existsSync(fullFilePath)) {
            return res.status(404).json({
                error: 'File not found on server'
            });
        }
        const fileBuffer = fs_1.default.readFileSync(fullFilePath);
        const fileStats = fs_1.default.statSync(fullFilePath);
        const fileKey = `${userId}/${(0, uuid_1.v4)()}.pdf`;
        const params = {
            Bucket: process.env.S3_BUCKET,
            Key: fileKey,
            Body: fileBuffer,
            ContentType: 'application/pdf',
            Metadata: {
                userId: userId,
                originName: path_1.default.basename(fullFilePath),
                fullSize: fileStats.size.toString()
            }
        };
        s3.upload(params, (err, data) => {
            if (err) {
                console.error('s3 Upload Error:', err);
                return res.status(500).json({
                    error: 'Filed to upload'
                });
            }
            res.json({
                message: 'PDF uploaded successfully',
                url: data.Location,
                fileKey: fileKey
            });
        });
    }
    catch (err) {
        console.log(err, "something went wrong");
        res.status(400).json({
            massage: "something went wrong"
        });
    }
});
function GenerateNotesPdf() {
    const notes = new pdfkit_1.default();
    notes.pipe(fs_1.default.createWriteStream('./notes/notes.pdf'));
    notes.fontSize(20).text('done', 100, 100);
    notes.end();
}
// GenerateNotesPdf()
// app.use(express.json());
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
function generateNotes() {
    return __awaiter(this, void 0, void 0, function* () {
        setInterval(() => __awaiter(this, void 0, void 0, function* () {
            try {
                const revisionTopic = yield redis.rpop("revision");
                if (revisionTopic !== null && revisionTopic.trim() !== '') {
                    console.log(`Processing: ${revisionTopic}`);
                    const notes = yield getAiGeneratedNotes(`generate notes for ${revisionTopic}`);
                    console.log('Notes Generated for ', notes);
                }
            }
            catch (err) {
                console.log('Queue processing error', err);
                resizeBy;
            }
        }), 5000);
    });
}
//generaing pedf from notes
app.listen(3002, () => {
    console.log(`listing on port number 3002`);
});
