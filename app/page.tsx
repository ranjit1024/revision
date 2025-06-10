import { Button } from "@/components/ui/button";
import bard from "../public/bird.png";
import Image from "next/image";

import srs from "../public/imp.png"
export default function Home() {
  return (
    <div className="container">
      <div className="h-[90vh] relative  bg-center container  bg-cover bg-gray-50/50 bg-blend-overlay px-16 py-4   bg-no-repeat w-[100vw]  ">
        <div className="absolute h-[60%] -z-2 w-[90%] bg-conic/decreasing from-violet-700/30 via-lime-300/30 to-blue-700/30 blur-3xl"></div>
        <div className="z-2 flex justify-between items-center ">
          <div className="flex items-center gap-2  ">
            <div className=" rounded-full"></div>
            <div className="flex items-center gap-2 ">
              <div className="bg-[url(../public/revisly.png)] bg-center bg-cover bg-no-repeat rounded-full h-10 w-10"></div>
              <p className="font-semibold text-[1.5rem]  text-input/90">
                Revisly
              </p>
            </div>
          </div>

          <div className="flex items-center gap-7 ">
            <p className=" font-normal text-[1rem] text-primary hover:scale-105 hover:cursor-pointer ">
              Sign in
            </p>
            <Button className="text-md font-medium hover:cursor-pointer ">
              Sign up
            </Button>
          </div>
        </div>
        {/* <--- header done.----> */}
        <div className="container mt-22 flex justify-center items-center ">
          <div className="text-primary flex items-center bg-gray-50 border-1 shadow-md shadow-blue-100 border-secondary/30  backdrop-blur-2xl  rounded-2xl px-4 py-1 font-medium gap-3">
            <Image width="22" height="48" src={bard} alt="bard" />
            <p className="text-[#0044ff]">
              Revision Smarter. Remember Longer
            </p>{" "}
          </div>
        </div>
        <div className="mt-6 flex  items-center  justify-center flex-col">
          <p className="text-[5rem] font-semibold">Revolutionize your</p>
          <p className="text-[5.2rem] -mt-7 font-semibold bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-transparent bg-clip-text">
            Revision Experience
          </p>
        </div>
        <div className="flex mt-6 text-input items-center justify-center text-[1.22rem] ">
          <p className="text-center w-[80%] font-normal text-black ">
            Revisly blends science-backed memory techniques with modern design —
            helping you revise smarter, remember longer, and learn with purpose.
          </p>
        </div>
        <div className="text-center mt-10 flex justify-center items-center  gap-4">
          <Button className="bg-primary text-md font-medium px-6 hover:cursor-pointer">
            Start Now
          </Button>
          <Button className="bg-transparent border-1 text-black border-primary hover:cursor-pointer">
            Explore Revisly
          </Button>
        </div>
      </div>
      <div className="h-100 p-20">
        <div className="flex justify-center items-center text-[2.8rem] flex-col mt-10 font-semibold text-input ">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-primary to-blue-900 text-[2.7rem] font-semibold text-shadow-2xs text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)">
            Make Revision a Habit, Not a Hassle.
          </p>
          <p className="text-lg text-black font-medium mt-2">
            Smart Revision. Backed by Science.
          </p>
        </div>
        <div className="  px-10 flex pt-10 justify-between items-center w-[100%] gap-3 ">

      
          <div className="bg-gradient-to-br w-[100%] justify-center flex flex-col from-sky-100 to-blue-100  rounded-2xl p-6">
            <div className="flex items-center flex-col space-x-4 p-10">
              <div className="p-3 bg-[url(../public/first.png)] size-81 bg-center bg-contain bg-no-repeat   ">
               
              </div>
            </div>
            <div className="mt-3 text-2xl font-medium  pb-3 text-shadow-gray-900 text-input ">AI-Generated quiz</div>
            <p className="font-normal text-gray-900">Done revising? The test begins instantly – let’s see what you’ve got!"</p>
          </div>
          <div className="bg-gradient-to-br w-[100%] justify-center flex flex-col from-emerald-100 to-green-100  rounded-2xl p-6">
            <div className="flex items-center justify-center flex-col space-x-4 p-10">
              <div className=" rounded-full bg-[url(../public/reminder.jpg)] size-82 bg-cover bg-no-repeat bg-center   ">
               
              </div>
            </div>
            <div className="text-2xl mt-4 font-medium  pb-3 text-shadow-gray-900 text-input ">Revision Reminder</div>
            <p>Get timely revision reminders sent straight to your registered email and mobile device</p>
          </div>

       
        </div>
        <div className="  px-10 flex pt-2 justify-between items-center w-[100%] gap-3 ">

      
          <div className="bg-gradient-to-b from-[#cbeef3] to-[#c4f1f7] w-[100%] justify-center flex flex-col   rounded-2xl p-6">
            <div className="flex items-center flex-col space-x-4 p-10">
              <div className="p-3 bg-[url(../public/srs.jpg)] bg-center bg-contain bg-no size-81 rounded-3xl ">
              
              </div>
            </div>
            <div className=" text-2xl font-medium mt-3  pb-5 text-shadow-gray-900 text-input ">Spaced Repetition System(SRS)</div>
            <p>Revise smarter with Spaced Repetition System (SRS) — backed by science</p>
          </div>
          <div className="bg-gradient-to-br w-[100%] justify-center flex flex-col from-[#b2d6f1] to-[#cbd8e2]  rounded-2xl p-6">
            <div className="flex items-center justify-center flex-col space-x-4 p-10">
              <div className=" bg-[url(../public/goal.png)] size-82 bg-cover bg-no-repeat bg-center   ">
               
              </div>
            </div>
            <div className=" mt-4 text-2xl font-medium  pb-6 text-shadow-gray-900 text-input ">Set Custome Goal</div>
            <p>Define your goal. Stay on track. Achieve it your way</p>
          </div>

       
        </div>
        <section className=" mt-5 dark:bg-neutral-950 py-16 px-6 md:px-10">
      <div className="max-w-6xl bg-white p-10 rounded-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
            Why Scientific-Based Revision Matters
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Spaced repetition mirrors how the brain retains information. Reviewing at the right intervals boosts memory strength, improves retention, and helps you study smarter, not harder.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-400 list-disc list-inside">
            <li>🧠 Strengthens long-term memory</li>
            <li>📅 Beats the forgetting curve</li>
            <li>⏱️ Reduces total study time</li>
          </ul>
          <button className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
            Learn how Spaced Repetition works →
          </button>
        </div>

        {/* Right: Image Placeholder */}
        <div className="relative w-full h-64 md:h-80 bg-gradient-to-br   rounded-2xl flex items-center justify-center">
          {/* Replace below div with your image */}
          <div className="text-center text-orange-600  text-xl font-semibold">
            <Image src={srs} width={0} height={0} alt="s"></Image>
          </div>
        </div>
      </div>
    </section>
      </div>
        
    </div>
  );
}
