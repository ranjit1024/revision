"use client"
import * as React from "react"
import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TimePicker() {
  const [selectedHour, setSelectedHour] = useState("")
  const [selectedMinute, setSelectedMinute] = useState("")
  const [selectedPeriod, setSelectedPeriod] = useState("")

  // Generate hours (01-12 for 12-hour format)
  const hours = Array.from({ length: 12 }, (_, i) => 
    String(i + 1).padStart(2, '0')
  )

  // Generate minutes (00-59)
  const minutes = Array.from({ length: 60 }, (_, i) => 
    String(i).padStart(2, '0')
  )

  const periods = ["AM", "PM"]

  const displayTime = () => {
    if (selectedHour && selectedMinute && selectedPeriod) {
      return `${selectedHour}:${selectedMinute} ${selectedPeriod}`
    }
    
  }

  return (
    <div className="flex flex-col ">
      {/* Display selected time */}
    
      
      {/* Three Select components side by side */}
      <div className="flex space-x-2">
        {/* Hours Select */}
        <Select value={selectedHour} onValueChange={setSelectedHour}>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Hour" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Hours</SelectLabel>
              {hours.map((hour) => (
                <SelectItem key={hour} value={hour}>
                  {hour}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Minutes Select */}
        <Select value={selectedMinute} onValueChange={setSelectedMinute}>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Min" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Minutes</SelectLabel>
              {minutes.map((minute) => (
                <SelectItem key={minute} value={minute}>
                  {minute}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* AM/PM Select */}
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-[70px]">
            <SelectValue placeholder="AM/PM" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Period</SelectLabel>
              {periods.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="text-sm font-medium mt-2 text-muted" >
      your session shedule at <span className="text-muted-foreground ">{displayTime()}</span>
      </div>
    </div>
  )
}
