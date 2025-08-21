// Chip.ts\\\
"use client"
import { bool } from "aws-sdk/clients/signer";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

type ChipProps = {
  level?: "Easy" | "Medium" | "Hard";
  cadence?: string; // e.g., "once a week"
  className?: string;
};

const levelStyles: Record<NonNullable<ChipProps["level"]>, string> = {
  Easy: "text-emerald-700 bg-emerald-50 ring-emerald-200 dark:text-emerald-300 dark:bg-emerald-900/30 dark:ring-emerald-800",
  Medium:"text-amber-700 bg-amber-50 ring-amber-200 dark:text-amber-300 dark:bg-amber-900/30 dark:ring-amber-800",
  Hard: "text-rose-700 bg-rose-50 ring-rose-200 dark:text-rose-300 dark:bg-rose-900/30 dark:ring-rose-800",
};

export default function Chip({
  level = "Easy",
  cadence = "once a week",
  className = "",
}: ChipProps) {
  const [isClicked,setIsclicked] = useState<boolean>(false);
  return (
    <span
      onClick={()=>{
        console.log({level});
        setIsclicked(true)
      }}
      role="status"
      aria-label={`${level}, ${cadence}`}
      className={[
        "inline-flex items-center gap-2 rounded-full px-3.5 py-2",
        "shadow-sm ring-1",
        "bg-gradient-to-b from-white/60 to-transparent dark:from-white/5",
        "backdrop-blur supports-[backdrop-filter]:bg-white/40",
        "transition hover:shadow-md hover:-translate-y-0.4",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20 focus-visible:ring-offset-transparent focus:bg-accent hover:cursor-pointer",
        
        levelStyles[level],
        className,
      ].join(" ")}
      tabIndex={0}
    >
      <CalendarDays className="size-4 opacity-80" aria-hidden />
      <span className="text-sm font-semibold">{level}</span>
      <span className="h-3 w-px bg-current/20" aria-hidden />
      <span className="text-xs text-black/60 dark:text-white/60">{cadence}</span>
    </span>
  );
}
