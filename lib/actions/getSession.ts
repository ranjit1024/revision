"use server"
import prisma from "../prisma"
import { getServerSession } from "next-auth"
import { authOption } from "../auth"
import type { userType } from "./newUser"
import { TypeOf } from "zod"
type RevisionSession = {
  id: string;
  email: string;
  topic: string;
  sessionsintervel: number[];
  sessions: number;
  time: Date;
  createdSession: Date;
  endSession: Date;
  totalDays: number;
  brif:string;
};
export async function getUserSession(){
    const session : userType | null  = await getServerSession(authOption);
    
    const revisionsSession : RevisionSession[] = await prisma.revision.findMany({
        where:{
            email:session?.user.email
        },
        orderBy:{
            createdSession:"desc"
        }
    })
    return revisionsSession;
}
