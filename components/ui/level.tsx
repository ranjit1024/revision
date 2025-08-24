"use client"


import { useEffect, useState } from "react"

export default function Chip() {
  const [easy, setisEasy] = useState<boolean | null>(false);
  const [medium, setisMedium] = useState<boolean | null>(false);
  const [hard, setisHard] = useState<boolean | null>(false);
  useEffect(() => {

  }, [])
  return <div className="flex gap-2">
    <div className={`  ${easy ? 'border bg-emerald-200 bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-emerald-700  ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800' : 'border bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-emerald-700 bg-emerald-50 ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800'}`}
      onClick={() => {
        setisMedium(false);
        setisHard(false)
        setisEasy(true)
      }}
    >
      <span className="text-emerald-800 font-medium text-md mr-3 ">
        Easy
      </span>
      <span className="text-gray-500">| </span>
      <span className="text-gray-500 text-xs font-medium pl-2">Weekly</span>
    </div>

    <div className={`  ${medium ? 'border bg-amber-200 bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-emerald-700  ring-amber-200 dark:text-amber-300 dark:bg-emerald-900/30 dark:ring-emerald-800' : 'border bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-amber-700 bg-amber-50 ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800'}`}
      onClick={() => {
        setisMedium(true);
        setisEasy(false);
        setisHard(false);
      }}
    >


      <span className="text-amber-800 font-medium text-md mr-3 ">
        Medium
      </span>
      <span className="text-gray-500">| </span>
      <span className="text-gray-500 text-xs font-medium pl-2">Thrice a week</span>
    </div>
    <div className={`${hard ? 'border bg-rose-200 bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-emerald-700  ring-amber-200 dark:text-amber-300 dark:bg-emerald-900/30 dark:ring-emerald-800' : 'border bg-gradient-to-b hover:cursor-pointer px-3 py-1.5 rounded-2xl from-white/60 to-transparent "text-amber-700 bg-rose-50 ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800'}`}
      onClick={() => {
        setisHard(true);
        setisEasy(false);
        setisMedium(false)
      }}
    >
      <span className="text-rose-800 font-medium text-md mr-3 ">
        Hard
      </span>
      <span className="text-gray-600 ">| </span>
      <span className="text-gray-500 text-xs font-medium pl-2 ">Every day</span>
    </div>
  </div>
}