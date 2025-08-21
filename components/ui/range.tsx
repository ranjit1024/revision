"use client"

import * as React from "react"
import { addDays, differenceInDays, isBefore, startOfDay, startOfToday, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

interface MaxRangeDatePickerProps {
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  maxRangeDays?: number // e.g. 30 or 31
  placeholder?: string
}

export function MaxRangeDatePicker({
  value,
  onChange,
  maxRangeDays = 31,
  placeholder = "Pick a date range (max 1 month)",
}: MaxRangeDatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [range, setRange] = React.useState<DateRange | undefined>(value)

  const today = startOfToday()

  function handleSelect(selectedRange: DateRange | undefined) {
    if (!selectedRange) {
      setRange(undefined)
      onChange?.(undefined)
      return
    }

    let { from, to } = selectedRange

    // Normalize 'from' to not be in the past
    if (from && isBefore(startOfDay(from), today)) {
      from = today
    }

    // If only from is selected, accept it
    if (from && !to) {
      const next = { from, to: undefined }
      setRange(next)
      onChange?.(next)
      return
    }

    if (from && to) {
      // Prevent end before start and clamp to max range
      if (isBefore(to, from)) {
        to = from
      }
      const diff = differenceInDays(to, from)
      if (diff > maxRangeDays) {
        to = addDays(from, maxRangeDays)
      }

      // Ensure neither is in the past
      if (isBefore(from, today)) {
        from = today
        if (isBefore(to, from)) to = from
      }

      const next = { from, to }
      setRange(next)
      onChange?.(next)
    }
  }

  React.useEffect(() => {
    setRange(value)
  }, [value])

  return (
    
    <Popover open={open} onOpenChange={setOpen}>
          <label className="block text-sm mb-2  font-medium text-zinc-700 text-start ml-1" htmlFor="topic">
                Select Date
              </label>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-80 justify-start text-left font-normal h-11 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100",
            !range?.from && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {range?.from ? (
            range.to ? (
              <>
                {format(range.from, "MMM dd, yyyy")} - {format(range.to, "MMM dd, yyyy")}
                <span className="ml-2 text-xs text-muted-foreground">
                  ({differenceInDays(range.to, range.from) + 1} days)
                </span>
              </>
            ) : (
              format(range.from, "MMM dd, yyyy")
            )
          ) : (
            placeholder
          )}
        </Button>
      </PopoverTrigger>
      

      
      <PopoverContent className="w-auto p-0 absolute" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={range?.from ?? today}
          selected={range}
          onSelect={handleSelect}
          numberOfMonths={2}
          // Disable:
          // 1) Past dates
          // 2) When 'from' is set, any date before 'from' or beyond maxRangeDays from 'from'
          disabled={(date) => {
            // Block all past dates
            if (isBefore(startOfDay(date), today)) return true

            // If selecting end date, restrict window
            if (range?.from && !range.to) {
              const diff = differenceInDays(date, range.from)
              if (diff < 0) return true
              if (diff > maxRangeDays) return true
            }

            return false
          }}
        />
        <div className="p-3 border-t text-xs text-muted-foreground flex items-center justify-between">
          • Past dates disabled • Maximum range: {maxRangeDays} days
        <Button className="bg-green-700 text-end" onClick={()=>{
          setOpen(false)
        }} >ok</Button>
        </div>
      </PopoverContent>
    

    </Popover>
  )
}
