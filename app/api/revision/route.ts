import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import z, { number, string } from "zod";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import { Redis } from "@upstash/redis";


import { Groq } from "groq-sdk";
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});
console.log(process.env.NEXTAUTH_URL);
console.log(process.env.GROQ_API_KEY);

// {
//     "topic":"maths",
//     "sessionIntervel": [1,2,4],
//     "sessions":2,
//     "time":"5:30PM",
//     "totaldays":7
// }

async function gerateBrif(sub: string) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Give me a 10-word brief about the ${sub} `,
      },
    ],
    model: "openai/gpt-oss-120b",
  });
  return chatCompletion.choices[0].message.content;
}

const intervel = [1, 2, 4, 7, 16, 30, 60, 90, 120, 180, 365];
const alllowdTotalDays: number[] = [1, 3, 7, 14, 30, 60, 120, 210, 330, 510, 875] as const;
const redis = Redis.fromEnv();

//function to get user selected time into date type
function getSelectedDateAndTime(time: string): Date {
  const today = new Date().toISOString().split('T')[0]
  const [year, month, day] = today.split('-').map(Number);
  console.log(month)
  const perido = String(time).slice(-2);
  const [hours, minute] = String(time).slice(0, -2).split(':').map(Number);

  let hours24 = Number(hours);
  if (perido === 'PM') hours24 += 12;
  if (perido === 'AM') hours24;

  const convertedDate = new Date(year, (month - 1), day, hours24, minute, 0, 0);
  return convertedDate
}
//function for calculating endsesionDate
function calculateAfterDays(value: number): Date {
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
    .refine((val) => alllowdTotalDays.includes(val), {
      message: 'enter correct number'
    })
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {


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



    const brief = await gerateBrif(sessionSchema.data.topic);


    const createRevison = await prisma.revision.create({
      data: {
        email: String(session?.user?.email),
        topic: String(sessionSchema.data.topic),
        sessionsintervel: sessionSchema.data.sessionIntervel,
        time: getSelectedDateAndTime(sessionSchema.data.time),
        endSession: calculateAfterDays(sessionSchema.data.totaldays),
        totalDays: sessionSchema.data.totaldays,
        sessions: sessionSchema.data.sessionIntervel.length,
        brif:String(brief)
      },
    });


    console.log(createRevison);
    for (let i = 0; i < sessionSchema.data.sessionIntervel.length; i++) {
      const createRevisons = await prisma.revisionSession.createMany({
        data: {
          email: String(session?.user?.email),
          sessionNumber:Number(createRevison.sessionsintervel[i]) ,
          score: 0,
          topic: createRevison.topic,
          revisionid:createRevison.id,
          reminderDate:calculateAfterDays(Number(createRevison.sessionsintervel[i])),
          status:'PENDING'
         
        }
      })
      console.log(createRevisons)
    }
    const sendToWorker = await redis.lpush('revision', JSON.stringify({topic:sessionSchema.data.topic, id:createRevison.id}));
    console.log(sendToWorker);

    return NextResponse.json({
      msg: "this is working",
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      msg: "this is working",
    });
  }
}
