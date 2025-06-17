"use client";
import { ReactNode } from "react";
import {
  LayoutDashboardIcon,
  ChartColumnStacked,
  GoalIcon,
  UserCircleIcon,
  CirclePlus,
  GalleryHorizontalEnd
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { NumberProvider } from "../context/DateContext";
export default function Home({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div className="h-[100%] relative bg-gray-100 ">
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
        }}
        className=" bg-white border-b-gray-300 z-10 border-b-1 grid grid-cols-[20%_80%] fixed w-full"
      >
        <div className=" border-r-1 border-r-gray-300 p-2  ">
          <div className="flex items-center gap-2 max-md:ml-2     ">
            <div className="bg-[url(../public/slogo.png)] bg-center bg-cover bg-no-repeat rounded-full h-6 w-6"></div>
            <p className="font-semibold text-[1.2rem]  text-input/90">
              Revisly
            </p>
          </div>
        </div>
        <div className=" flex px-3 justify-between items-center">
          <div>
            <p className="text-md font-normal">👋 Hello Ranjit das</p>
          </div>

          <div className="flex gap-3 items-center  ">
            <div className="inline-flex ">
              <Button onClick={()=>{
                router.push("/revisly/revision")
              }} className="inline-flex items-center gap-2 bg-primary  hover:cursor-pointer">
                <CirclePlus className="size-4 text-gray-50" />
                <p>Set Revision</p>
              </Button>
            </div>
            <div className="w-[1] h-10 border-r-1  border-r-gray-300 bg-secondary-foreground "></div>
            <div
              className="prifile flex items-center gap-2 hover:cursor-pointer hover:scale-102"
              onClick={() => {}}
            >
              <div className=" bg-blend-darken  p-1 w-fit rounded-full bg-gray-100 shadow">
                <img
                  width="25"
                  height="30"
                  src="https://img.icons8.com/pulsar-color/50/appointment-reminders.png"
                  alt="appointment-reminders"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="h-[100%] w-[99vw] relative  grid grid-cols-[20%_80%]">
        <motion.div
          initial={{
            x: -20,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className=" bg-white sticky top-0   h-[97.5vh]  z-2 pt-10 border-r-1  border-gray-300   "
        >
          <div
            className="mt-5 p-3 space-y-2  
        
        "
          >
            <motion.div
              initial={{
                x: -25,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              onClick={() => {
                router.push("/revisly/home");
              }}
              className="flex items-center gap-3 hover:bg-primary/10  rounded-md hover:cursor-pointer py-2 px-1"
            >
              <LayoutDashboardIcon className="size-4 text-gray-900" />
              <p className="text-sm text-neutral-800 font-medium">Dashboard</p>
            </motion.div>

            <motion.div
              initial={{
                x: -25,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.6,
              }}
              onClick={() => {
                router.push("/revisly/all");
              }}
              className="flex items-center gap-3 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1"
            >
              <GalleryHorizontalEnd className="size-4 text-gray-900" />
              <p className="text-sm text-neutral-800 font-medium">
                All Revisios
              </p>
            </motion.div>
            <motion.div
              initial={{
                x: -25,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              onClick={() => {
                router.push("/revisly/custom");
              }}
              className="flex items-center gap-3 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1"
            >
              <GoalIcon className="size-4 text-gray-900" />
              <p className="text-sm text-neutral-800 font-medium">
                Set custom Revision
              </p>
            </motion.div>

            <motion.div
              initial={{
                x: -25,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 1,
              }}
              onClick={() => {
                router.push("/revisly/report");
              }}
              className="flex items-center gap-3 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1"
            >
              <ChartColumnStacked className="size-4 text-gray-900" />
              <p className="text-sm text-neutral-800 font-medium">
                Test/quix report
              </p>
            </motion.div>

            <motion.div

                   initial={{
       x:-25,
      opacity:0
    }} 
    animate={{
      x:0,
      opacity:1
    }}
    transition={{
      duration:0.4,
      delay:1.3
    }}
       
              onClick={() => {
                router.push("/revisly/profile");
              }}
              className="flex items-center gap-3 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1"
            >
              <UserCircleIcon className="size-4 text-gray-900" />
              <p className="text-sm text-neutral-800 font-medium">Profile</p>
            </motion.div>

          </div>
        </motion.div>

        <div className="p-3 w-[98%]   pt-15 ">
          <NumberProvider>

          {children}
    
          </NumberProvider>
          </div>
      </div>
    </div>
  );
}
