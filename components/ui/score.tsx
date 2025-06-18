"use client"
import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Button } from "@/components/ui/button"

export function Score({ progress = 12, revision = 1, total = 10 }) {
  return (
    <div className="w-[230px] h-[306px] rounded-2xl shadow-sm border-1 border-gray-100 p-4 flex flex-col justify-between bg-white">
      {/* Header */}
      <div className="text-sm font-medium text-indigo-800">
        Revision {revision}/{total}
      </div>

      {/* Circular Progress */}
      <div className="flex justify-center items-center flex-1">
        <div className="w-30 h-30">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            strokeWidth={10}
            styles={buildStyles({
              textColor: "#111",
              pathColor: "#6366f1", // Indigo-500
              trailColor: "#e5e7eb", // Gray-200
              textSize: "16px",
            })}
          />
        </div>
      </div>

      {/* Button */}
      <Button className="bg-secondary hover:cursor-pointer hover:bg-secondary/80 text-white w-full mt-4">
        View Report
      </Button>
    </div>
  )
}
