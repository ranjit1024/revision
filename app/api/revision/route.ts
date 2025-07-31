import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import zod from "zod"
const revisionSchema = zod.object({
    topicName : zod.string(),
    toppicIntervel: zod.number().gt(500),
    time: zod.date()
})
export async function GET() {
  // Logic for your API endpoint goes here
  
  return NextResponse.json({ message: "Hello from Pune!", timestamp: new Date().toISOString() });
}
