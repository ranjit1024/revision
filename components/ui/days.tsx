"use client";


import { useEffect, useState } from "react";


export function SelectDay({Limit}:{
    Limit:1 | 3
}) {
    const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const [selectedDay, setSelectdDay] = useState<string[] | null>(null)
    const [chosseDays, setChossDay] = useState<string | null>(null);
    const [limit,setLimit] = useState<boolean | null>(null)
    useEffect(()=>{
        if(selectedDay?.length === Limit){
            return setLimit (true)
        }
        console.log(selectedDay);
    },[chosseDays])

    return (
        <div className="flex  gap-3 ">
            {week.map((day) => (
                <button
                    key={day}
                    onClick={() => {
                        setChossDay(day)
                       
                        setSelectdDay(prev => {
                            const arr = prev ?? [];
                            return arr.includes(day) ? arr :[...arr, day]
                        })
                        
                    }
                    }

                    className={`px-5 py-[6px] rounded-full text-sm font-medium transition-all duration-300
            ${chosseDays === day
                            ? "bg-indigo-600 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md"
                        } `}
                >
                    {day}
                </button>
            ))}
        </div>
    );
}
