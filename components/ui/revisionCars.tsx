'use client'
import Image from "next/image";
import { Button } from "./button";
export default function Card() {
  return (
    <div className="max-w-[45%] mb-4 hover:cursor-pointer p-5 bg-card rounded-xl shadow">
     
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
        <div className="text-end mt-10">
            <Button className="bg-chart-3 hover:cursor-pointer"> Get Result</Button>
        </div>
     
     
    </div>
  );
}
