import express,{ Express } from "express";
import dotenv from "dotenv";
import {Redis} from "@upstash/redis"
dotenv.config()

const app:Express = express();
const port =3000;
app.use(express.json());
const redis = Redis.fromEnv();

app.post("/revision", async(req,res)=>{
    console.log(req.body);
    console.log(req.body.gender)
    const send = await redis.set("gender", req.body.gender );
    console.log(send)
    res.json({
        meassage:"added to redis"
    })
})


app.listen(port, ()=>{
    console.log("Server listing on port number 3000")
})