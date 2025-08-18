import express, { Express, Response, Request, raw } from "express";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Groq } from "groq-sdk";

import multer from "multer"
import AWS from "aws-sdk"

import pdfDoc from "pdfkit"
import fs from "fs"
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());

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

function GenerateNotesPdf(text: string) {
  const doc = new pdfDoc();
  doc.pipe(fs.createWriteStream('./notes/notes2.pdf'))
  doc.fontSize(12)
    .text(text, 10, 10, {
      width: 1000,
      align: 'justify'
    });
  doc.end()
}
async function generateNotes() {


  setInterval(async () => {
    try {
      const revisionData  = await redis.rpop("revision") as {
        topic:string
        id:string
       }  | null;
      // const revisionTopic = rawValue ? JSON.parse(rawValue) as {
      //   topic: string ,
      //   id: string 
      // }  : null;
      
      
      if (revisionData && revisionData.topic !== null && revisionData.topic.trim() !== '') {
        console.log(`Processing: ${revisionData}`);
        const notes = await getAiGeneratedNotes(`generate notes for ${revisionData.topic} in clean string format `);
        
        const notesPdf = GenerateNotesPdf(String(`${notes}`));
        const fileContent = fs.createReadStream('./notes/notes2.pdf')
        const params = {
          Bucket: String(process.env.S3_BUCKET),
          Key:`${revisionData.id} ${revisionData.topic}/notes/notes.pdf`,
          Body: fileContent,
          ContentType:'application/pdf',
          ACL:'private'
        }
        const result = await s3.upload(params).promise()
        console.log('Notes uploaded successfully')
        return "done with creating notes"
      
      }
      return "done with creating notes"
    }
    catch (err) {
      console.log('Queue processing error', err);
      return "error"
    }
  }, 5000);

}
const status =  generateNotes().then(data => data)



app.listen(3002, () => {
  console.log(`listing on port number 3002`)
})
