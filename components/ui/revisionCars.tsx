'use client'
import Image from "next/image";
import { Button } from "./button";
import { motion } from "framer-motion";
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  
};
import { useRouter } from "next/navigation";
export default function Card() {
  const router = useRouter()
  return (
    <motion.div 
    variants={cardVariant}
    className="max-w-[32%] max-h-fit hover:cursor-pointer p-5 bg-card rounded-xl shadow">
     
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center flex-col ">
            <div className="flex gap-2 items-center ">

            
            <Image
              className="p-1 bg-blue-100 rounded-2xl"
              width="30"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/book.png"
              alt="book"
            />
            <p className="text-lg font-medium text-input">Topic name</p>
            </div>
            <div className="">
                
          <p className="text-muted text-sm ">6/13/2025 - 6/13/2025</p>
            </div>

          </div>

          <div>
            <p className="text-green-600  font-medium">Completed</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-md text-slate-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            cupiditate eaque iusto voluptates expedita velit amet, quibusdam
            distinctio nobis placeat ratione quis earum officiis accusantium
            animi sed doloribus corporis consequatur?
          </p>
        </div>
        <div className="text-end mt-8">
            <Button className="bg-gray-950 hover:cursor-pointer" onClick={()=>{
              let random = Math.floor(Math.random()*100000).toString();
              router.push(`/revisly/revison/${random}`)
            }} > Get Details</Button>
        </div>
     
     
    </motion.div>
  );
}
