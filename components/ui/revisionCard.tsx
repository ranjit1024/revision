'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Hash } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  
};

function formatDate(d:any) {
  const dt = d instanceof Date ? d : new Date(d);
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(dt);
}

export default function RevisionSessionCard({
  sessionNumber = 1,
  title = "Revision Session",
  startDate = new Date(),
  endDate = new Date(),
  brief = "Short summary about what to revise in this session.",
  progress = 0,

}:{
 
  title:string,
  startDate: Date,
  endDate: Date,
  brief:string,
  sessionNumber:number,
  progress:number
}) {
  const pct = Math.max(0, Math.min(100, progress));

  return (
    <motion.article
       variants={cardVariant}
      transition={{
        
        ease:'anticipate'
      }}
      whileHover={{ border:'1px solid lightgray',
        boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'
       }}
      className=" w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm p-6 transition-colors hover:cursor-pointer"
    >
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-semibold">
            <Hash className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Session #{sessionNumber}</p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center  justify-end" >
            <Calendar className="w-4 h-4" />
            <span>{formatDate(startDate)}</span>
            <span className="mx-1">—</span>
            <span>{formatDate(endDate)}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1 flex items-center gap-2 justify-end">
            <Clock className="w-3.5 h-3.5" />
            <span>#{Math.ceil((Number(new Date(endDate)) - Number(new Date(startDate))) / (1000 * 60 * 60 * 24) + 1)} day(s)</span>
          </div>
        </div>
      </header>

      <main className="mt-7 ">
        <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{brief}</p>

        <div className="mt-4">
          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-2.5 rounded-full"
              style={{ width: `${pct}%`, background: "linear-gradient(90deg,#7c3aed,#6366f1)" }}
            />
          </div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
            <span>{pct}% complete</span>
            <span>{pct < 100 ? "In progress" : "Completed"}</span>
          </div>
        </div>

        
      </main>

      <footer className="mt-5 flex items-center justify-end">
       
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm hover:brightness-95 hover:cursor-pointer">View Notes</button>
          <button className="px-3 py-1.5 rounded-lg bg-linear-150 from-white to-indigo-100  text-gray-900 border text-sm hover:brightness-95 hover:cursor-pointer">View all session</button>
          
        </div>
      </footer>
    </motion.article>
  );
}

