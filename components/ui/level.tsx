"use client"


import { useEffect, useState } from "react"

export default function Chip(){
  const [isClicked,setIsclicked] = useState<boolean | null>(false)
  useEffect(()=>{ 

  },[])
  return <div className="flex gap-2">
    <div className={`  ${isClicked ? 'border bg-orange-200 bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-emerald-700  ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800' :'border bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-emerald-700 bg-emerald-50 ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800'}` }>


    <span className="text-emerald-800 font-medium text-md mr-3 ">
      Easy
    </span>
    <span>| </span>
    <span className="text-gray-500 text-xs font-medium pl-2">Weekly</span>
    </div>

    <div className={`  ${isClicked ? 'border bg-amber-200 bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-emerald-700  ring-amber-200 dark:text-amber-300 dark:bg-emerald-900/30 dark:ring-emerald-800' :'border bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-amber-700 bg-amber-50 ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800'}` }>


    <span className="text-amber-800 font-medium text-md mr-3 ">
      Medium
    </span>
    <span>| </span>
    <span className="text-gray-500 text-xs font-medium pl-2">Thrice a week</span>
    </div>
    <div className={`  ${isClicked ? 'border border-gray-50 bg-rose-200 bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-rose-700  ring-roas-200 ' :'border bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-roas-700 bg-rose-50 ring-emerald-200 '}` }>


    <span className="text-rose-800 font-medium text-md mr-3 ">
      Hard
    </span>
    <span>| </span>
    <span className="text-gray-500 text-xs font-medium pl-2">Every day</span>
    </div>
  </div>
}