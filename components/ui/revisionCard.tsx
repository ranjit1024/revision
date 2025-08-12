'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Hash } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  
};
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { string } from "zod";
// export default function Card() {
//   const router = useRouter()
//   return (
//     <motion.div 
//     variants={cardVariant}
//     className="min-w-[40%] max-h-fit hover:cursor-pointer p-5 bg-card rounded-xl shadow">
     
//  <div className="rounded-2xl  bg-white dark:bg-zinc-900  w-full max-w-sm">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-4">
//         <ClipboardCheck className="text-blue-500" />
//         <div>
//           <h2 className="text-lg font-semibold">Revision #1</h2>
//           <p className="text-sm text-gray-500 dark:text-gray-400">Physics: Thermodynamics</p>
//         </div>
//       </div>

//       {/* Illustration Placeholder */}
//       <div className="rounded-xl overflow-hidden mb-4 relative">
//         <Image
//           src={Notes}
//           alt="Revision Desk"
//           height={400}
        
//         />
//         <div className="absolute top-2 right-2 bg-white/80 dark:bg-zinc-800/80 px-2 py-1 text-xs rounded-lg">
//           <Brain className="inline w-4 h-4 mr-1" />
//           Spaced Repetition
//         </div>
//       </div>

//       <div className="mt-6">
//         <p className="font-medium">Physics: Thermodynamics</p>
//         <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur, voluptatem nostrum earum quibusdam atque perspiciatis repellendus fuga quo distinctio!</p>
//       </div>

//         <Button className="mt-8 text-gray-800 font-medium  border border-gray-600 bg-gray-100 hover:cursor-pointer hover:bg-primary hover:shadow hover:text-gray-50 " onClick={()=>{
//           router.push("/revisly/revision/all")
//         }}>view full detail</Button>
//      </div>
     
//     </motion.div>
//   );
// }
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
  tags = [""]
}:{
  tags:string[],
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
          <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 justify-end">
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

      <main className="mt-4">
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

        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </main>

      <footer className="mt-5 flex items-center justify-end">
       
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm hover:brightness-95 hover:cursor-pointer">View Notes</button>
          
        </div>
      </footer>
    </motion.article>
  );
}

