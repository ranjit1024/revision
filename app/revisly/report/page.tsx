"use client"
import Test from "@/components/ui/test";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren:0.10
    },
  },
};
export default function Home(){
    const ref = useRef(null)
    const inView = useInView(ref, { once:true})
    return <div className="h-[90%] w-[100%]">
        
        <motion.div 
          ref={ref}
    variants={containerVariant}
    initial="hidden"
    animate={inView ? "show":"hidden"}
        className="space-y-3">
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                
        </motion.div>
    </div>
}