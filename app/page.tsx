import { Button } from "@/components/ui/button";
import bard from "../public/bird.png"
import Image from "next/image";
import logo from "../public/revisly.png"
export default function Home() {
  return (
    <div className="container">
      <div className="h-[90vh] relative  bg-center container  bg-cover bg-gray-50/50 bg-blend-overlay px-16 py-4   bg-no-repeat w-[100vw]  ">
      <div className="absolute h-[80%] -z-2 w-[90%] bg-conic/decreasing from-violet-700/30 via-lime-300/30 to-blue-700/30 blur-3xl">
      </div>
      <div className="z-2 flex justify-between items-center ">
        <div className="flex items-center gap-2  ">
          <div className=" rounded-full">

       

          </div>
        <div className="flex items-center gap-2 ">
        <div className="bg-[url(../public/revisly.png)] bg-center bg-cover bg-no-repeat rounded-full h-10 w-10">

        </div>
        <p className="font-semibold text-[1.5rem]  text-input/90">Revisly</p>
        </div>
        </div>
      
        <div className="flex items-center gap-7 ">

        <p className=" font-normal text-[1rem] text-primary hover:scale-105 hover:cursor-pointer ">Sign in</p>
        <Button className="text-md font-medium hover:cursor-pointer " >Sign up</Button>
        </div>
      </div>
      {/* <--- header done.----> */}
      <div className="container mt-22 flex justify-center items-center ">
        <div className="text-primary flex items-center bg-gray-50 border-1 shadow-md shadow-blue-100 border-secondary/30  backdrop-blur-2xl  rounded-2xl px-4 py-1 font-medium gap-3">
          <Image width="22" height="48" src={bard} alt="bard"/>
          <p className="text-[#0044ff]">Revision Smarter. Remember Longer</p> </div>

      </div>
      <div className="mt-6 flex  items-center  justify-center flex-col">
        <p className="text-[5rem] font-semibold">Revolutionize your</p>
        <p className="text-[5.2rem] -mt-7 font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-transparent bg-clip-text">Revision Experience</p>
      </div>
      <div className="flex mt-6 text-input items-center justify-center text-[1.22rem] ">
        <p className="text-center w-[80%] font-medium text-black ">Revisly blends science-backed memory techniques with modern design — helping you revise smarter, remember longer, and learn with purpose.</p>
      </div>
      <div className="text-center mt-10 flex justify-center items-center  gap-4">
        <Button className="bg-primary text-md font-medium px-6 hover:cursor-pointer">Start Now</Button>
        <Button className="bg-transparent border-1 text-black border-primary hover:cursor-pointer">Explore Revisly</Button>
      </div>
      </div>
      
    </div>
  );
}
