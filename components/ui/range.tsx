"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { useNumber } from "../../app/context/DateContext"
export function DateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })
  const { number, setNumber } = useNumber();
  const [open,setOpen] = React.useState(false)
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-blue-400"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0 ">
          <Calendar
            disabled={{before:new Date()}}
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(selelectData) =>{
              setOpen(false)
              setDate(selelectData);
              const diff = (selelectData ?Number(selelectData?.to) - Number(selelectData?.from) : null);
            
              let result =  Math.ceil(diff ? diff / (1000 * 60 *60*24): 0);
              setNumber(result)              
              
            }}
            numberOfMonths={2}
            />
           
        </PopoverContent>
      </Popover>
    </div>
  )
}





