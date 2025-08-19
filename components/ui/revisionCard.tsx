'use client'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, Hash,  } from "lucide-react";
import { useEffect,useState } from "react";
import { ViewNotes } from "./notesPdf";
import { getSessionBrif } from "@/lib/actions/getDetailsSession";
import { listUserPDFs } from "@/lib/actions/getNotesPdf";
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  
};

function formatDate(d:any) {
  const router = useRouter()
  const dt = d instanceof Date ? d : new Date(d);
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(dt);
}

export default function RevisionSessionCard({
  sessionNumber = 1,
  title = "Revision Session",
  startDate = new Date(),
  endDate = new Date(),
  cratedDate= new Date(),
  brief = "Short summary about what to revise in this session.",
  progress = 0,
  id="",
}:{
 
  title:string,
  startDate: Date,
  endDate: Date,
  brief:string,
  sessionNumber:number,
  progress:number
  id:string
  cratedDate:Date
}) {
  const pct = Math.max(0, Math.min(100, progress));
  const router = useRouter();
   const [brif, setBrif] = useState<string | undefined >(undefined);
    const [topic, setTopic] = useState<string | undefined>(undefined);
    const [revisionId,setRevisionId] = useState<String | undefined >(undefined)
  useEffect(()=>{
    
      async function getBrif() {
        const details  = await getSessionBrif(String(revisionId));
        const brif :string  | undefined= details?.revision.brif ;
        const topic : string | undefined  = details?.revision.topic;
        setTopic(topic)
        setBrif(brif)
      }
      getBrif()
    
    },[revisionId])
  return (
    <motion.article
    
       variants={cardVariant}
      transition={{
        
        ease:'anticipate'
      }}
      whileHover={{ border:'1px solid lightgray',
        boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'
       }}
      className=" w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm p-6 relative transition-colors hover:cursor-pointer"
    >
      <div className="py-3">

    
      <div className="text-sm mb-5 absolute right-1  top-1 flex justify-end items-end w-full rounded-2xl   ">
        <div className="px-3 py-1 bg-yellow-50 rounded-lg font-normal text-amber-500">
        <p>{formatDate(cratedDate)}</p>
        </div>
      </div>
      </div>
      <header className="flex relative items-center justify-between gap-4">
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
          <div onClick={()=>{
            setRevisionId(id)
          }}>
          <ViewNotes topic={topic} brief={brief} id={String(id)} />

          </div>
          <button className="px-3 py-1.5 rounded-lg bg-linear-150 from-white to-indigo-100  text-gray-900 border text-sm hover:brightness-95 hover:cursor-pointer" onClick={()=>{
             
              router.push(`/revisly/revision/${id}`);

          }}>View all session</button>
        
        </div>
      </footer>
    </motion.article>
  );
}

