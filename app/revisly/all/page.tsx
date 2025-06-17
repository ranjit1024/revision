'use client'
import Card from "@/components/ui/revisionCars"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    className="flex  w-full flex-wrap gap-5 items-start ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </motion.div>
}