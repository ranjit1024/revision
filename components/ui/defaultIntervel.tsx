'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "./button";
import { number } from "framer-motion";


export function SelectScrollable() {
  const data =  [1, 2, 4, 7, 16, 30, 60, 90, 120, 180, 365];
  const cummativeData = [1, 3, 7, 14, 30, 60, 120, 210, 330, 510, 875];
  const [showDetails, setShowdetails] = React.useState(false);
  const [value, setValue] = React.useState<{
       revision:number,
       days:string
  } | null>(null);
  return (

    <Select onValueChange={(e)=>{
      setShowdetails(true);
      const item = JSON.parse(e);
      setValue(item)
      
    }}>
      <p className="text-sm font-medium mb-1">Selet Revison Intervel</p>
      <SelectTrigger className="w-full flex" >
        
        <SelectValue placeholder="Select a Intervel" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>

          <SelectLabel className=""><div className="flex justify-between w-[100%]">
            <div className="w-100 flex justify-center  font-medium">Revision</div>
                <div className="w-100 flex justify-center font-medium">Days After Last Revision</div>
                <div className="w-100 flex justify-center font-medium">Total Days</div>
            </div></SelectLabel>
     
          {
            data.map((item,index)=>{
            
                
                return <SelectItem value={JSON.stringify({
                  revision:index,
                  days:cummativeData[index]
                })}  key={index} className="flex justify-between items-center gap-10 w-[90%]" >
            
                <div className=" w-100 flex justify-center">{index+1}</div>
                <div className="  flex justify-center w-100">{item  }</div>
                <div className="  w-100 flex  justify-center ">{cummativeData[index]  }</div>
                </SelectItem>
             
              
            })
          }
        </SelectGroup>
      </SelectContent>
       {
        showDetails ? <p className="text-sm font-medium mt-2 text-muted">you have shedule for {value ? value.revision+1 : null} Revision session which will take {value?.days} days to complete</p>:null
       }
       <Button className="mt-8 bg-secondary hover:cursor-pointer">Set Revision Reminder</Button>
    </Select>
  )
}
