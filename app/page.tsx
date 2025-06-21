"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Logo from "../public/revisly.png"
import Image from "next/image";
import side from "../public/side.png"
export default function Home() {
  const navigation = useRouter();

  return (
   <div className="px-10 py-4 bg-gray-50 h-[100%]">
    <div className="">
    <header>
      <div className="flex items-center justify-between gap-2 rounded-full bg-white px-4 py-2 shadow-blue-200 shadow">
        <div className="flex items-center gap-2">
      <Image src={Logo} width={25} height={10} alt="logo" ></Image>
      <p className="text-[1rem] font-semibold text-neutral-900">Revisly</p>
        </div>
      <div className="flex gap-2 items-center">
        <Button className="bg-white text-primary hover:cursor-pointer hover:bg-white">Login</Button>
        <Button className="hover:cursor-pointer ">Join</Button>
      </div>
      </div>
    </header>
    <div className="grid grid-cols-2 mt-20 h-[100vh]   ">
      <div>
        <div>
        <p className="text-[3.5rem]  font-medium">Revise scientifically.</p>
        <p className="text-[3.5rem] -mt-2 font-medium">Remember longer </p>

        <p className="text-[3.5rem] -mt-2 font-medium">Master Time</p>
        </div>
      <div className="mt-5 w-[80%]">
        Automatic reminders are sent to your registered email and phone based on the date and time you set.
      </div>
      <div className="mt-15 flex items-center">
        <Button className=" bg-accent-foreground hover:cursor-pointer">Get access</Button>
        <Button className="ml-3 bg-gray-50 flex items-center text-primary hover:cursor-pointer  hover:bg-white hover:shadow">
          <img width="20" height="48" src="https://img.icons8.com/fluency/48/google-play.png" alt="google-play"/>
          Download app</Button>
      </div>
      </div>
    
    <div className="flex justify-end items-end text-end h-[110vh] w-[100%]">
      <div className="bg-[url(../public/side2.png)] w-[82%] h-[100%]  rounded-2xl bg-center bg-cover bg-no-repeat">

    </div>
      
      
      </div>
    </div>
    </div>
   </div>
  );
}
