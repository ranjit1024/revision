import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import z, { number } from "zod";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import {Redis} from "@upstash/redis";
import { redirect } from "next/dist/server/api-utils";
import axios from "axios";

// {
//     "topic":"maths",
//     "sessionIntervel": [1,2,4],
//     "sessions":2,
//     "time":"5:30PM",
//     "totaldays":7
// }
const intervel = [1, 2, 4, 7, 16, 30, 60, 90, 120, 180, 365];
 const alllowdTotalDays:number[] = [1, 3, 7, 14, 30, 60, 120, 210, 330, 510, 875] as  const;
const redis = Redis.fromEnv();

//function to get user selected time into date type
function getSelectedDateAndTime(time:string):Date{
  const today = new Date().toISOString().split('T')[0]
  const [year,month,day] = today.split('-').map(Number);
   console.log(month)
    const perido = String(time).slice(-2);
    const [hours,minute] = String(time).slice(0,-2).split(':').map (Number);
    
    let hours24 = Number(hours);
    if(perido === 'PM') hours24 += 12;
    if(perido === 'AM') hours24;

    const  convertedDate = new Date(year,(month - 1),day, hours24,minute,0,0);
    return convertedDate
}
//function for calculating endsesionDate
function calculatingEndDate(value:number):Date{
  const date = new Date();
  date.setDate(date.getDate() + value);
  return date;
}
// all zod schemas
const validation = z.object({
  topic: z.string(),
  sessionIntervel: z.array(z.number().refine((num) => intervel.includes(num))),
  sessions: z.number(),
  time: z
    .string()
    .min(6)
    .max(7)
    .regex(/^\d{1,2}:\d{2}[AP]M$/, "Invalid time format")
    .refine((time) => {
      const timepart = time.slice(0, -2); 
      const [hours, minutes] = timepart.split(":").map(Number);
      return hours >= 1 && hours <= 12 && minutes >= 0 && minutes <= 59;
    }),
    totaldays: z.number()
    .refine((val) => alllowdTotalDays.includes(val),{
      message:'enter correct number'
    })
});

export async function POST(req: NextRequest, res: NextResponse) {
  const date = new Date();
  const session = await getServerSession(authOption);
  const body = await req.json();
  const sessionSchema = validation.safeParse(body);

  console.log(sessionSchema.error);
  console.log(sessionSchema.data);

  if (!sessionSchema.success) {
    return NextResponse.json({
      msg: "Kindly enter correct input",
    });
  }


  console.log(sessionSchema.data.time);
  console.log(getSelectedDateAndTime(sessionSchema.data.time).toLocaleString());
  console.log('end session',calculatingEndDate(sessionSchema.data.totaldays).toLocaleDateString())
  
  const createUser = await prisma.revisions.create({
    data: {
      email: String(session?.user?.email),
      topic: String(sessionSchema.data.topic),
      sessionsintervel: sessionSchema.data.sessionIntervel,
      time: getSelectedDateAndTime(sessionSchema.data.time),
      endSession: calculatingEndDate(sessionSchema.data.totaldays),
      totalDays: sessionSchema.data.totaldays,
      sessions: sessionSchema.data.sessionIntervel.length,
    },
  });
 
  console.log(createUser);
  const sendToWorker = await redis.lpush('revision', sessionSchema.data.topic);
  console.log(sendToWorker);
  axios.get('http://localhost:3002/revision');
  return NextResponse.json({
    msg: "this is working",
  });
}
