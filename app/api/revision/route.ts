import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import z from "zod";

const validation = z.object({
  topic: z.string(),
  sessionIntervel: z.array(z.number()),
  sessions: z.number(),
  time: z.string(),
});

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()
  const {success} = validation.safeParse({
    body
  })
  if(success){
    
  }
  return NextResponse.json({
    msg: "this is working",
  });
}
