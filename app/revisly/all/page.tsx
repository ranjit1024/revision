'use client'
import Card from "@/components/ui/revisionCard"
import RevisionCard from "@/components/ui/score";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevisionSessionCard from "@/components/ui/revisionCard";
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren:0.10
    },
  },
};

export default function Home(){
    const ref = useRef(null)
    const inView = useInView(ref, { once:true})
    return <motion.div 

    ref={ref}
    variants={containerVariant}
    initial="hidden"
    animate={inView ? "show":"hidden"}
    className="grid  justify-center gap-4  w-[100%] grid-cols-2   ">
      
    <RevisionSessionCard
   sessionNumber={3}
   title="Calculus: Integration"
   startDate= {new Date("2025-08-12")}
   endDate={new Date("2025-08-12")}
  brief="Focused on substitution, integration by parts, and definite integrals."
  progress={65}
   tags={["math","integration","practice"]}
  />
    <RevisionSessionCard
   sessionNumber={3}
   title="Calculus: Integration"
   startDate= {new Date("2025-08-12")}
   endDate={new Date("2025-08-12")}
  brief="Focused on substitution, integration by parts, and definite integrals."
  progress={65}
   tags={["math","integration","practice"]}
  />
    <RevisionSessionCard
   sessionNumber={3}
   title="Calculus: Integration"
   startDate= {new Date("2025-08-12")}
   endDate={new Date("2025-08-12")}
  brief="Focused on substitution, integration by parts, and definite integrals."
  progress={65}
   tags={["math","integration","practice"]}
  />
  
       
      
  
        
    </motion.div>
}