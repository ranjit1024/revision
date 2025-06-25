"use server"
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import { handler } from "@/app/api/auth/[...nextauth]/route";
interface userType {
    user:{
        name:string,
        email:string,
        image:string
    }
};

export default async function newUser(){
    const session : userType | null  = await getServerSession(handler);
    console.log(session?.user.email)
    if(session){
        const existingUser = await client.user.findFirst({
            where:{
                email:session?.user.email
            }
        })
        if(existingUser){
            console.log("User exist")
            return "you are alredy loged in"
        }
        const createUser  = await client.user.create({
            data:{
                email:session?.user.email,
                name:session?.user.name,
                image:session?.user.image,
                createdAt:new Date()
            }
        })
        console.log(createUser)
    }
    console.log(session)
}