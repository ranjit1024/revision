'use client'
import Image from "next/image";
import { ClipboardCheck, Brain, CalendarCheck } from "lucide-react"
import Notes from "../../public/notes.jpg"
import { motion } from "framer-motion";
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  
};
import { useRouter } from "next/navigation";
import { Button } from "./button";
export default function Card() {
  const router = useRouter()
  return (
    <motion.div 
    variants={cardVariant}
    className="min-w-[40%] max-h-fit hover:cursor-pointer p-5 bg-card rounded-xl shadow">
     
 <div className="rounded-2xl  bg-white dark:bg-zinc-900  w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <ClipboardCheck className="text-blue-500" />
        <div>
          <h2 className="text-lg font-semibold">Revision #1</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Physics: Thermodynamics</p>
        </div>
      </div>

      {/* Illustration Placeholder */}
      <div className="rounded-xl overflow-hidden mb-4 relative">
        <Image
          src={Notes}
          alt="Revision Desk"
          height={400}
        
        />
        <div className="absolute top-2 right-2 bg-white/80 dark:bg-zinc-800/80 px-2 py-1 text-xs rounded-lg">
          <Brain className="inline w-4 h-4 mr-1" />
          Spaced Repetition
        </div>
      </div>

      <div className="mt-6">
        <p className="font-medium">Physics: Thermodynamics</p>
        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur, voluptatem nostrum earum quibusdam atque perspiciatis repellendus fuga quo distinctio!</p>
      </div>

        <Button className="mt-8 text-gray-800 font-medium  border border-gray-600 bg-gray-100 hover:cursor-pointer hover:bg-primary hover:shadow hover:text-gray-50 " onClick={()=>{
          router.push("/revisly/revision/all")
        }}>view full detail</Button>
     </div>
     
    </motion.div>
  );
}
