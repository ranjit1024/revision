"use client"
import Test from "@/components/ui/test";
import { motion } from "framer-motion";
export default function Home(){
    return <div className="h-[90%] w-[100%]">
        
        <motion.div 
        className="space-y-3">
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
        </motion.div>
    </div>
}