"use client";
import { ChartBarLabelCustom } from "@/components/ui/last5";
import {Retation} from "@/components/ui/retation";

import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import newUser from "@/lib/actions/newUser";
import { da } from "date-fns/locale";
export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  useEffect(()=>{
    newUser().then(data => console.log(data))
  },[])
  return (
    <div>
      <div className="w-[100%] ">
        <div className="grid grid-cols-2 gap-3 ">
          <div className="first">
            <motion.div
              initial={{
                y: -40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className=" bg-white max-md:mb-5 rounded-xl shadow-sm w-[100%] max-md:m-2 h-fit"
            >
              <div className="p-5">
                <p className="font-normal text-lg text-black mb-1">
                  Current Revision Topic
                </p>
                <p className="text-md">topic name</p>
                <div className="my-8 bg-green-200 h-2 rounded-2xl z-0">
                  <div className="bg-green-500 w-[10%] relative rounded-2xl h-full">
                    <div className="bg-green-500 border-3 border-gray-100 -top-1 absolute left-10 w-4 h-4  rounded-full "></div>
                  </div>
                </div>
                <p className="mt-4 text-[1.1rem] text-gray-600">
                  You’re{" "}
                  <span className="text-green-600 font-semibold">
                    ahead of pace
                  </span>{" "}
                  and should reach your goal{" "}
                  <span className="font-medium text-gray-900">
                    {" "}
                    ahead of schedule.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="p-5 bg-white rounded-2xl mb-3 h-[100%] shadow"
          >
            <p className="font-normal text-lg text-black mb-1">
              Upcomming Revison
            </p>
            <p className="text-md">topic name</p>

            <p className="pt-10 text-[1.1rem] text-gray-600">Topic info</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
        className="pt-3   w-[100%]">
          <Retation />
        </motion.div>
        <div className="grid grid-cols-2 w-[100%] mt-3 gap-3 h-100">
          <motion.div 
            initial={{
              y: -20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={
              {
                once:true
              }
            }
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          
          className="w-[100%] bg-gray-50  ">
             <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border w-[100%] mb-2"
            />
          </motion.div>
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          className="w-[100%]  ">
            <ChartBarLabelCustom  />
          </motion.div>

        </div>
    
      </div>
    </div>
  );
}
