// components/TimePicker.tsx
"use client";
import { Label } from "recharts";
import { Input } from "./input";
import { useState } from "react";



export default function TimePicker({
  onChange,
}: {
  onChange?: (value: string) => void;
}) {
  const [selectedTime, setSelectedTime] = useState("10:30:00");

  const handleChange = (value: string) => {
    setSelectedTime(value);
    if (onChange) onChange(value);
    console.log(selectedTime)
  };

  return (   <div className="flex flex-col gap-3 w-100">
        <Label  className="px-1">
          Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          value={selectedTime}
      

          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          onChange={e => handleChange(e.target.value)}
          
        />
      </div>
  );
}
