import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Groq } from "groq-sdk";

import multer from "multer"
import AWS from "aws-sdk"
import { v4 as uuidv4 } from "uuid"
import pdf, { note } from "pdfkit"
import fs from "fs"
import path from "path"
dotenv.config();
const app = express();
app.use(express.json())

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});
console.log(process.env.GROQ_API_KEY)
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_ENDPOINT
});

interface MulterRequest extends Request {
  file: Express.Multer.File;
}
interface UploadResponse {
  message: string;
  url: string;
  fileKey: string;
}
interface ErrorResponse {
  error: string;
}
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Only pdf files are allowed'))
    }
  }
});


function uploadpdf() {

}

function GenerateNotesPdf() {
  const notes = new pdf();
  notes.pipe(fs.createWriteStream('./notes/notes.pdf'))

  notes.fontSize(20).text('done', 100, 100);
  notes.end()
}

const redis = Redis.fromEnv();

async function getAiGeneratedNotes(params: string) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: params,
      },
    ],
    model: "openai/gpt-oss-120b",
  });
  return chatCompletion.choices[0].message.content;
}


async function generateNotes() {


  setInterval(async () => {
    try {


      const revisionTopic = await redis.rpop("revision");

      if (revisionTopic !== null && revisionTopic.trim() !== '') {
        console.log(`Processing: ${revisionTopic}`);
        const notes = await getAiGeneratedNotes(`generate notes for ${revisionTopic}`);
         GenerateNotesPdf()
        console.log('Notes Generated for ', notes)
      }
    }
    catch (err) {
      console.log('Queue processing error', err);
      
    }
  }, 5000)
}
generateNotes()
//generaing pedf from notes

app.listen(3002, () => {
  console.log(`listing on port number 3002`)
})
