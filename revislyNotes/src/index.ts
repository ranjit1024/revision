import express, { Express } from "express";
import dotenv from "dotenv";
import { Redis } from "@upstash/redis";
import { Groq } from "groq-sdk";
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
        content: "who are you",
      },
    ],
    model: "openai/gpt-oss-120b",
  });
  return chatCompletion.choices[0].message.content;
}


app.get("/revision", async (req, res) => {
//   const sendDate = await redis.rpop("revision");
//   console.log(sendDate);

});

app.listen(port, () => {
  console.log("Server listing on port number 3001");
});
