import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { authOption } from "@/lib/auth";
import prisma from "@/lib/prisma";
import zod from "zod";

const revisionSchema = zod.object({
  sessionTopic: zod.string().min(3),
  sessionIntervel: zod.string().max(5),
  sessionTime: zod.string(),
});

interface userType {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

export type revisionSchemaType = zod.infer<typeof revisionSchema>;

export async function POST(reqest: NextRequest) {
  const session: userType | null = await getServerSession(authOption);
  const timeStamp: string = new Date().toISOString();
  try {
    // Logic for your API endpoint goes here
    const body = await reqest.json();
    const response = revisionSchema.safeParse(body);

    if (!response.success) {
      console.log("enter");
      return NextResponse.json(
        {
          message: "Kindly enter correct input",
          timeStamp,
        },
        { status: 400 }
      );
    }
    //putting entry in prisma
    const newSession = await prisma.revisions.create({
      data:{email: String(session?.user?.email),
      topic: response.data.sessionTopic,
      session: response.data.sessionIntervel,
      time: response.data.sessionTime,
      endSession: new Date()
      }
    });
    console.log(newSession);

    return NextResponse.json({ message: "Hello from Pune!", timeStamp });
  } catch (e) {
    console.log(e);
  }
}
