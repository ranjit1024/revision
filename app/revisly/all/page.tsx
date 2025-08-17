'use client'
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevisionSessionCard from "@/components/ui/revisionCard";
import { getUserSession } from "@/lib/actions/getSession";
import Skeleton from "@/components/ui/cardSkeleton";
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.10
    },
  },
};

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
  brif:string
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  
};

export default function Home() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true });
  const [revisionSessionInfo, setRevisionSessionInfo] = useState<RevisionSession[] | null>(null)
  useEffect(() => {

    async function getRevisionSession() {
      const getrevisionSesion = await getUserSession();
      setRevisionSessionInfo(getrevisionSesion)
    }
    getRevisionSession()
  }, [])
  console.log(revisionSessionInfo)
  return <motion.div

    ref={ref}
    variants={containerVariant}
    initial="hidden"
    animate={inView ? "show" : "hidden"}
    className="grid  justify-center gap-4  w-[100%] grid-cols-2   ">

    {
      revisionSessionInfo === null ? <motion.div
        ref={ref}
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid h-[100vh] grid-cols-2 w-[80vw] gap-3 ">
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
      </motion.div>
        : revisionSessionInfo?.map((item, index) => <RevisionSessionCard
          key={index}
          sessionNumber={3}
          title={item.topic}
          startDate={item.createdSession}
          endDate={item.endSession}
          brief={item.brif}
          progress={65}
          id={item.id}
          cratedDate={item.createdSession}
          
        />)
    }


  </motion.div>
}
