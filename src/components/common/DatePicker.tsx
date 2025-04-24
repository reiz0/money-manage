"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "flex justify-between items-center w-[240px] text-emerald-50 hover:bg-emerald-400/20 hover:text-emerald-700 data-[state=open]:bg-emerald-400/20 data-[state=open]:text-emerald-700 bg-emerald-800/40 border border-emerald-700/50 rounded-md transition-colors"
          )}
        >
          <div className="flex items-center gap-2">
          <CalendarIcon className="text-emerald-500" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
          {/* <ChevronDown className="h-4 w-4 text-emerald-400 ml-1" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
