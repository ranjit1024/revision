import express, { Express } from "express";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Groq } from "groq-sdk";
import { aw } from "@upstash/redis/zmscore-CgRD7oFR";

dotenv.config();

const groq = new Groq({
    apiKey:process.env.GROQ_API_KEY
});

// app.use(express.json());
const redis = Redis.fromEnv();

async function getAiGeneratedNotes(params:string) {
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

  
  setInterval(async ()=>{
    try{

    
    const revisionTopic = await redis.rpop("revision");

    if(revisionTopic !== null && revisionTopic.trim() !== ''){
      console.log(`Processing: ${revisionTopic}`);
      const notes = await getAiGeneratedNotes(`generate notes for ${revisionTopic}`);
      console.log('Notes Generated for ', notes)
    }
  }
  catch(err){
    console.log('Queue processing error', err);
  }
  },5000)
}
generateNotes();


