import express, { Express } from "express";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Groq } from "groq-sdk";
import { aw } from "@upstash/redis/zmscore-CgRD7oFR";
import multer from "multer"
import aws from "aws-sdk"
import v4 from "uuid"
import pdf, { note } from "pdfkit"
import fs from "fs"
import { notStrictEqual } from "assert";
dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});
function GenerateNotesPdf() {
  const notes = new pdf();
  notes.pipe(fs.createWriteStream('notes.pdf'))

  notes.fontSize(20).text('done', 100, 100);
  notes.text("Welcome to KLJ GroupFounded in 1967, KLJ is not only the Largest Manufacturer and the Market Leader in Plasticizers & Polymer Compounds in South Asia, but also an outright leader in the Secondary Plasticizer - Chlorinated Paraffin segment as the Largest Manufacturer across the globe. Their Ultra-Modern Manufacturing facilities in Silvassa, Bharuch, Agra & Kutch in India, Rayong in Thailand and Mesaieed in Qatar are equipped with State-of-the-Art Technology and Equipment, producing a wide range of products to meet their Customers Requirements.", 10,10)
  notes.end()
}
GenerateNotesPdf()
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
    }
  }, 5000)
}

//generaing pedf from notes


