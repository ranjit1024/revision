"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import logo from "../public/revisly.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import srs from "../public/imp.png";
import { tr } from "framer-motion/client";
export default function Home() {
  const navigation = useRouter();

  return (
    <div className=" overflow-x-hidden">
      <div className="h-[100%] max-md:w-100 max-md:h-[100%] max-lg:static  relative  bg-center container  bg-cover  px-16 py-4 max-md:flex max-md:flex-col max-md:px-0 bg-no-repeat w-[100vw]   ">
        <div className="absolute h-[60%]  -z-2 w-[90%] bg-conic/decreasing from-violet-300/30 via-blue-300/30 to-blue-300/20 blur-3xl"></div>
        <div className="z-2 flex justify-between   items-center   max-md:w-95 w-[90vw]">
          <div className="flex items-center gap-2  ">
            <div className="flex items-center gap-2 max-md:ml-2 ">
              <div className="bg-[url(../public/revisly.png)] bg-center bg-cover bg-no-repeat rounded-full h-10 w-10"></div>
              <p className="font-semibold text-[1.5rem]  text-input/90">
                Revisly
              </p>
            </div>
          </div>

          <div className="flex items-center gap-7 max-md:gap-4 ">
            <p className=" font-normal text-[1rem] text-primary hover:scale-105 hover:cursor-pointer ">
              Sign in
            </p>
            <Button className="text-md font-medium hover:cursor-pointer ">
              Sign up
            </Button>
          </div>
        </div>
        {/* <--- header done.----> */}
        <div className="  max-lg:w-[100vw]  mt-22 flex justify-center items-center ">
          <div className="text-primary flex items-center bg-gray-50 border-1   border-secondary/30   rounded-2xl px-4 py-1 font-medium gap-3">
            <Sparkles className="size-4" />
            <p className="text-[#0044ff]">
              Revision Smarter. Remember Longer
            </p>{" "}
          </div>
        </div>
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="mt-6 max-md:text-center flex  items-center  justify-center flex-col max-lg:w-[100vw] "
        >
          <p className="text-[5rem] max-md:text-[2.4rem] font-semibold">
            Revolutionize your
          </p>
          <p className="text-[5.2rem] max-md:text-[2rem] -mt-7  max-md:-mt-3 font-semibold  bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-transparent bg-clip-text">
            Revision Experience
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="flex mt-2 text-input items-center justify-center text-[1.22rem] "
        >
          <p className="text-center max-md:w-100 w-[80%] font-normal text-black ">
            Revisly blends science-backed memory techniques with modern design —
            helping you revise smarter, remember longer, and learn with purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="text-center mt-10 flex justify-center items-center  gap-4"
        >
          <Button className="bg-primary text-md font-medium px-6 hover:cursor-pointer">
            Start Now
          </Button>
          <Button className="bg-transparent border-1 text-black border-primary hover:cursor-pointer">
            Explore Revisly
          </Button>
        </motion.div>
      </div>

      <div className=" p-20 max-md:p-0 max-lg:p-0 max-lg:w-[100vw] max-lg:flex-wrap ">
        <div className="flex w-full  justify-center items-center text-[2.8rem] max-md:text-[1rem] flex-col mt-10 font-semibold text-input ">
          <p className="text-transparent max-md:text-center max-md:mt-10 bg-clip-text bg-gradient-to-r from-green-900 via-primary to-blue-900 text-[2.7rem] max-md:text-[1.6rem] font-semibold text-shadow-2xs text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)">
            Make Revision a Habit, Not a Hassle.
          </p>
          <p className="text-lg text-black font-medium mt-2">
            Smart Revision. Backed by Science.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="  px-10 flex pt-10 justify-between items-center w-[100%] max-md:p-10 gap-3 max-md:flex-wrap  ">
            <motion.div
              initial={{
                x: -50,
                opacity: 0,
                scale:0.90
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                scale:1
              }}
              transition={{
                duration: 0.4,
              
              }}
              viewport={{
                once:true,
                amount:0.5,
                
              }}
              className="bg-gradient-to-br w-[100%] h-fit justify-center flex flex-col from-sky-100 to-blue-100  rounded-2xl p-6"
            >
              <div className="flex items-center flex-col space-x-4 p-10">
                <div className="p-3 bg-[url(../public/first.png)] size-81 max-md:size-61 bg-center bg-contain bg-no-repeat   "></div>
              </div>
              <div className="mt-3 text-2xl font-medium  pb-3 text-shadow-gray-900 text-input ">
                AI-Generated quiz
              </div>
              <p className="font-normal text-gray-900 w-[90%]">
                Done revising? The test begins instantly – let’s see what you’ve
                got!"
              </p>
            </motion.div>

            <motion.div 
              initial={{
                x: 50,
                opacity: 0,
                scale:0.90
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                scale:1
              }}
              transition={{
                
                duration: 0.4,
              }}
              viewport={{
                once:true,
                amount:0.4
              }}
               className="bg-gradient-to-br w-[100%] h-fit justify-center flex flex-col from-emerald-100 to-green-100  rounded-2xl p-6">
              <div className="flex items-center justify-center flex-col space-x-4 p-10">
                <div className=" rounded-full bg-[url(../public/reminder.jpg)] size-82 max-md:size-61 bg-cover bg-no-repeat bg-center   "></div>
              </div>
              <div className="text-2xl mt-4 font-medium  pb-3 text-shadow-gray-900 text-input ">
                Revision Reminder
              </div>
              <p>
                Get timely revision reminders sent straight to your registered
                email and mobile device
              </p>
            </motion.div>
          </div>

          <div className=" max-lg:px-10 w-[100%] max-md:flex-wrap px-10 flex pt-2 justify-between  items-center  gap-3 ">
            <motion.div
                initial={{
                x: 100,
                opacity: 0,
                scale:0.9
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                scale:1
               
              }}
              transition={{
                
                duration: 0.4,
              }}
              viewport={{
                once:true,
                amount:0.4
              }} className="bg-gradient-to-b h-fi from-[#cbeef3] to-[#c4f1f7] w-[100%] justify-center flex flex-col   rounded-2xl p-6">
              <div className="flex items-center flex-col space-x-4 p-10">
                <div className="p-3 bg-[url(../public/srs.jpg)] max-md:size-61 bg-center bg-contain bg-no size-81 rounded-3xl "></div>
              </div>
              <div className=" text-2xl font-medium mt-3  pb-5 text-shadow-gray-900 text-input ">
                Spaced Repetition System(SRS)
              </div>
              <p>
                Revise smarter with Spaced Repetition System (SRS) — backed by
                science
              </p>
            </motion.div>
            <motion.div 
                        initial={{
                x: -100,
                opacity: 0,
                scale:0.9
              
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                scale:1
              }}
              transition={{
                
                duration: 0.4,
              }}
              viewport={{
                once:true,
                amount:0.4
              }}
            className="bg-gradient-to-br w-[100%] justify-center flex flex-col from-[#b2d6f1] to-[#cbd8e2]  rounded-2xl p-6">
              <div className="flex items-center justify-center flex-col space-x-4 p-10">
                <div className=" bg-[url(../public/goal.png)] max-md:size-61 size-82 bg-cover bg-no-repeat bg-center   "></div>
              </div>
              <div className=" mt-4 text-2xl font-medium  pb-3 text-shadow-gray-900 text-input ">
                Set Custome Goal
              </div>
              <p className="w-[50%]">
                Define your goal. Stay on track. Achieve it your way
              </p>
            </motion.div>
          </div>
        </div>

        <motion.section 
             initial={{ x: 60, opacity: 0, scale: 0.98 }}
  whileInView={{ x: 0, opacity: 1, scale: 1 }}
  transition={{
    duration: 0.4, // smoother than 0.2
    ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack feel
    delay: 0.05, // small delay to make entrance more natural
  }}
  viewport={{ once: true, amount: 0.4 }}
        className=" mt-5 dark:bg-neutral-950 py-16 px-6 md:px-10">
          <div className="max-w-6xl bg-white p-5 rounded-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
                Why Scientific-Based Revision Matters
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Spaced repetition mirrors how the brain retains information.
                Reviewing at the right intervals boosts memory strength,
                improves retention, and helps you study smarter, not harder.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-400 list-disc list-inside">
                <li>🧠 Strengthens long-term memory</li>
                <li>📅 Beats the forgetting curve</li>
                <li>⏱️ Reduces total study time</li>
              </ul>
              <button className="mt-6 inline-flex  items-center text-blue-600 dark:text-blue-400 hover:underline text-md hover:cursor-pointer font-medium">
                Learn how Spaced Repetition works
              </button>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative w-full h-64 md:h-80 bg-gradient-to-br rounded-2xl flex items-center justify-center">
              {/* Replace below div with your image */}
              <div className="text-center w-[90%] text-orange-600  text-xl font-semibold">
                <Image src={srs} width={0} height={0} alt="s"></Image>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <motion.div 
      initial={{ y: 60, opacity: 0, scale: 0.98 }}
  whileInView={{ y: 0, opacity: 1, scale: 1 }}
  transition={{
    duration: 0.4, // smoother than 0.2
    ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack feel
    delay: 0.05, // small delay to make entrance more natural
  }}
  viewport={{ once: true, amount: 0.4 }}
      className="bg-primary flex justify-between items-center w-[100%] max-md:w-[100vw] contaier p-10  ">
        <div className="">
          <p className="text-[2.5rem] max-md:text-[1.2rem] font-medium text-white">
            Backed by Science, Built for Revision.
          </p>
        </div>
        <div>
          <Button className="bg-white text-black hover:cursor-pointer hover:bg-blue-100">
            {" "}
            Explore Revisly
          </Button>
        </div>
      </motion.div>
      <motion.footer 
      initial={{  opacity: 0, scale: 0.98 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.4, // smoother than 0.2
    ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack feel
    delay: 0.05, // small delay to make entrance more natural
  }}
  viewport={{ once: true, amount: 0.4 }}
      className="w-full bg-white p-8 ">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <Image src={logo} height={34} width={34} alt="logo" />

          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 max-md:justify-center">
            <li>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
          Copyright © 2024&nbsp;
          <a
            href="https://material-tailwind.com/"
            target="_blank"
            rel="noreferrer"
          >
            Revisly
          </a>
          .
        </p>
      </motion.footer>
    </div>
  );
}
