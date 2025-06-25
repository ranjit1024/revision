"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import User from "../../public/user.jpg";
import {
  LayoutDashboardIcon,
  ChartColumnStacked,
  GoalIcon,
  CirclePlus,
  GalleryHorizontalEnd,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Profile from "@/components/ui/Profile";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { NumberProvider } from "../context/DateContext";
import Image from "next/image";
import Notification from "@/components/ui/notification";
import Loader from "@/components/ui/loader";
import { se } from "date-fns/locale";
export default function Home({ children }: { children: ReactNode }) {
  const { data: session,status} =  useSession()
  const router = useRouter();
  const [profile,setProfile] = useState<boolean>(false)
  const drpodownRef = useRef<HTMLDivElement>(null);
  const[notification, setNotification] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(status === "loading") return
    if(!session){
      router.replace("/auth/signin");
      
    }

    
  },[router,session,status]);
  useEffect(()=>{
    const handleClick = (e: MouseEvent)=>{
      if(drpodownRef.current && !drpodownRef.current?.contains(e.target as Node)){
        setProfile(false)
    }}
    document.addEventListener("click", handleClick);
    
    return () => document.removeEventListener("click", handleClick)
  },[])
  
  useEffect(()=>{
    const handleClick = (e: MouseEvent)=>{
      if(notificationRef.current && !notificationRef.current?.contains(e.target as Node)){
        setNotification(false);
      }
    }
    document.addEventListener("click", handleClick);
    
    return ()=> document.removeEventListener("click", handleClick)
  },[])
  
  

  
  if (status === "loading") return <Loader/>;
  if (!session) return null;
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
        className=" bg-white border-b-gray-200 z-10 border-b-1 grid grid-cols-[20%_80%] fixed w-full"
      >
      
        <div className=" border-r-1 border-r-gray-100 p-2  ">
          <div className="flex items-center gap-2 max-md:ml-2     ">
            <div className="bg-[url(../public/slogo.png)] bg-center bg-cover bg-no-repeat rounded-full h-6 w-6"></div>
            <p className="font-semibold text-[1.2rem]  text-input/90">
              Revisly
            </p>
          </div>
        </div>
        <div className=" flex px-3 justify-between items-center">
          <div>
            <p className="text-md font-normal">👋 Hello {session?.user?.name}</p>
          </div>

          <div className="flex gap-3 items-center  ">
            <div className="inline-flex ">
              <Button
                onClick={() => {
                  router.push("/revisly/revision");
                }}
                className="inline-flex items-center gap-2 bg-primary  hover:cursor-pointer"
              >
                <CirclePlus className="size-4 text-gray-50" />
                <p>Set Revision</p>
              </Button>
            </div>
            <div  className="w-[1] shadow-2xs h-10 border-r-1 border-chart  border-r-gray-300 bg-secondary-foreground "></div>
            {
              notification ?<div  className="absolute bg-white space-y-4 border-1 border-gray-300 overflow-scroll h-[60vh] rounded-lg p-7 shadow top-11 right-2 scroll-smooth   ">
      <h1 className="text-muted font-semibold">Notification</h1>
      <Notification/>
      <Notification/>
      <Notification/>
      <Notification/>
     
     
      </div>:null
            }

            <div
              ref={notificationRef}
              className="prifile flex items-center gap-2 hover:cursor-pointer hover:scale-102"
              onClick={() => {
                setNotification(prev => !prev)
              }}
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

      <div className="h-[100vh] w-[100%] relative   grid grid-cols-[20%_80%]">
        <div className="relative">
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
          className=" bg-white    h-[100vh] w-[20%]   left-0 fixed z-2  border-r-1  border-gray-200/90   "
        >
          <div
            className=" p-4  pt-15 space-y-2  
        
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
              className="flex items-center gap-3 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1"
            >
              <LayoutDashboardIcon className="size-4 text-gray-900" />
              <p className="text-sm text-neutral-800 font-medium ">Dashboard</p>
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
                All Revision Sessions
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
                Revsion report
              </p>
            </motion.div>

            <div
              className={`flex items-end hover:cursor-pointer h-[63vh] relative `}
            >
              
              <motion.div
                ref={drpodownRef}
                initial={{
                  y: 25,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  delay: 1.3,
                }}
                className="flex items-center w-full relative  gap-3 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1"
                onClick={()=>{
                  setProfile(prev => !prev)
                }}
              >
                {
                  profile ?<Profile ></Profile>:null
                }
                <div>
                  <Image
                    src={User}
                    width={35}
                    height={20}
                    alt="user"
                    className="rounded-full"
                  />
                </div>
                <div >
                  
              
                  <p className="text-md text-neutral-800 font-medium">
                    usernane
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        </div>

        <div className="p-3 w-[99%]   pt-15 ">
          <NumberProvider>{children}</NumberProvider>
        </div>
      </div>
    </div>
  );
}
