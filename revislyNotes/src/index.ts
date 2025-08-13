import express, { Express } from "express";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Groq } from "groq-sdk";
import { get } from "http";
dotenv.config();

const groq = new Groq({
    apiKey:process.env.GROQ_API_KEY
});
const app: Express = express();
const port = 3002;
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


app.get("/revision", async (req, res) => {
  while(true){
    try{
      const revisionTopic = await redis.rpop("revision");
      console.log(revisionTopic);
      if(revisionTopic === null){
        const notes =  getAiGeneratedNotes(String(revisionTopic))
        console.log(notes);
        break
      }
    }
    catch(err){
      console.log(err)
    }

  }

});

app.listen(port, () => {
  console.log("Server listing on port number 3001");
});
