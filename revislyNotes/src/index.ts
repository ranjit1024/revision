import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Groq } from "groq-sdk";
import { ap, aw } from "@upstash/redis/zmscore-CgRD7oFR";
import multer from "multer"
import AWS from "aws-sdk"
import { v4 as uuidv4 } from "uuid"
import pdf, { note } from "pdfkit"
import fs from "fs"
import path from "path"
import { error } from "console";
dotenv.config();
const app = express();
app.use(express.json())

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  endpoint:process.env.AWS_ENDPOINT
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
  }
});


app.post('/upload-pdf', (req, res) => {
  console.log(req.body)
  try{

  
  const { userId, fileName, filePath } = req.body;
  if (!userId || (!fileName && !filePath)) {
    return res.status(400).json({
      error: 'userid and  file name or file path reqired'
    })
  }

  const fullFilePath: string = filePath || path.join(__dirname, 'uploads', fileName);

  // Check if file exists
  if (!fs.existsSync(fullFilePath)) {
    return res.status(404).json({
      error: 'File not found on server'
    });
  }

  const fileBuffer = fs.readFileSync(fullFilePath);
  const fileStats = fs.statSync(fullFilePath);

  const fileKey: string = `${userId}/${uuidv4()}.pdf`;

  const params: AWS.S3.PutObjectRequest = {
    Bucket:process.env.S3_BUCKET!,
    Key:fileKey,
    Body:fileBuffer,
    ContentType: 'application/pdf',
    Metadata: {
      userId: userId,
      originName:path.basename(fullFilePath),
      fullSize:fileStats.size.toString()
    }
  }
  s3.upload(params, (err:Error, data:AWS.S3.ManagedUpload.SendData) => {
    if(err){
      console.error('s3 Upload Error:', err);
      return res.status(500).json({
        error:'Filed to upload'
      })
    }
      res.json({
    message: 'PDF uploaded successfully',
    url: data.Location,
    fileKey: fileKey
  });
  })
  }
  catch(err){
    console.log(err, "something went wrong");
    res.status(400).json({
      massage:"something went wrong"
    })
  }
});


function GenerateNotesPdf() {
  const notes = new pdf();
  notes.pipe(fs.createWriteStream('./notes/notes.pdf'))

  notes.fontSize(20).text('done', 100, 100);
  notes.end()
}
// GenerateNotesPdf()
// app.use(express.json());
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
        console.log('Notes Generated for ', notes)
      }
    }
    catch (err) {
      console.log('Queue processing error', err);
      resizeBy
    }
  }, 5000)
}

//generaing pedf from notes

app.listen(3002, () => {
  console.log(`listing on port number 3002`)
})
