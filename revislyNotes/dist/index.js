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
const dotenv_1 = __importDefault(require("dotenv"));
const redis_1 = require("@upstash/redis");
const groq_sdk_1 = require("groq-sdk");
dotenv_1.default.config();
const groq = new groq_sdk_1.Groq({
    apiKey: process.env.GROQ_API_KEY
});
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
            }
        }), 5000);
    });
}
generateNotes();
