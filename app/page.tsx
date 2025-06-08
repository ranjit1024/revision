import { Button } from "@/components/ui/button";
import bard from "../public/bird.png"
import Image from "next/image";
import logo from "../public/revisly.png"
export default function Home() {
  return (
    <div className="container">
      <div className="h-[90vh] bg-[url(../public/back.jpg)] bg-center container  bg-cover bg-gray-50/50 bg-blend-overlay px-16 py-4   bg-no-repeat w-[100vw]  ">
      <div className="z-2 flex justify-between items-center ">
        <div className="flex items-center gap-2  ">
          <div className="  rounded-full">

       

          </div>
        <div className="flex items-center gap-2 ">
        <div className="bg-[url(../public/revisly.png)] bg-center bg-cover bg-no-repeat rounded-full h-10 w-10">

        </div>
        <p className="font-semibold text-[1.5rem]  text-input/90">Revisly</p>
        </div>
        </div>
        <div className="flex list-none gap-10 items-center font-normal justify-center text-input ">
          <li className="hover:cursor-pointer text-lg hover:text-primary">Home </li>
          <li  className="hover:cursor-pointer text-lg hover:text-primary">Why us</li>
          <li  className="hover:cursor-pointer text-lg hover:text-primary">about us</li>
        </div>
        <div className="flex items-center gap-7 ">

        <p className=" font-normal text-[1rem] text-primary hover:scale-105 hover:cursor-pointer ">Sign in</p>
        <Button className="text-md font-medium hover:cursor-pointer " >Sign up</Button>
        </div>
      </div>
      {/* <--- header done.----> */}
      <div className="container mt-25 flex justify-center items-center">
        <div className="text-primary flex items-center bg-gray-50 border-1 border-secondary/30  backdrop-blur-2xl  rounded-2xl px-4 py-1 font-medium gap-3">
          <Image width="22" height="48" src={bard} alt="bard"/>
          <p className="text-[#0044ff]">Revision Smarter. Remember Longer</p> </div>

      </div>
      <div className="mt-6 flex  items-center  justify-center flex-col">
        <p className="text-[5rem] font-semibold">Revolutionize your</p>
        <p className="text-[5.2rem] -mt-7 font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Revision Experience</p>
      </div>
      <div className="flex mt-4 text-input items-center justify-center">
        <p className="text-center w-[80%] font-medium text-black ">Maximize your revision potential by embracing the most effective techniques. Discover scientifically proven strategies that not only enhance your understanding but also help you retain information for a longer time.</p>
      </div>
      <div className="text-center mt-10 flex justify-center items-center  gap-4">
        <Button className="bg-primary text-md font-medium px-6 hover:cursor-pointer">Start Now</Button>
        <Button className="bg-transparent border-1 text-black border-primary hover:cursor-pointer">Explore Revisly</Button>
      </div>
      </div>
      
    </div>
  );
}
