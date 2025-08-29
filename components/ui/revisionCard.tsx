'use client'
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, Hash,BookOpen,BarChart3  } from "lucide-react";
import { useEffect,useState } from "react";
import { ViewNotes } from "./notesPdf";
import { getSessionBrif } from "@/lib/actions/getDetailsSession";
import { getNotes } from "@/lib/actions/getNotesPdf";
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  
};

function formatDate(d:any) {
  const dt = d instanceof Date ? d : new Date(d);
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(dt);
}

// export default function RevisionSessionCard({
//   sessionNumber = 1,
//   title = "Revision Session",
//   startDate = new Date(),
//   endDate = new Date(),
//   cratedDate= new Date(),
//   brief = "Short summary about what to revise in this session.",
//   progress = 0,
//   id="",
  
// }:{
 
//   title:string,
//   startDate: Date,
//   endDate: Date,
//   brief:string,
//   sessionNumber:number,
//   progress:number
//   id:string
//   cratedDate:Date
  
// }) {
//   const pct = Math.max(0, Math.min(100, progress));
//   const router = useRouter();
   
 
//   return (
//     <motion.article
    
//        variants={cardVariant}
//       transition={{
        
//         ease:'anticipate'
//       }}
//       whileHover={{ border:'1px solid lightgray',
//         boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'
//        }}
//       className=" w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm p-6 relative transition-colors hover:cursor-pointer"
//     >
//       <div className="py-3">

    
//       <div className="text-sm mb-5 absolute right-1  top-1 flex justify-end items-end w-full rounded-2xl   ">
//         <div className="px-3 py-1 bg-yellow-50 rounded-lg font-normal text-amber-500">
//         <p>{formatDate(cratedDate)}</p>
//         </div>
//       </div>
//       </div>
//       <header className="flex relative items-center justify-between gap-4">
//         <div className="flex items-center gap-3">
//           <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-semibold">
//             <Hash className="w-5 h-5" />
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">Session #{sessionNumber}</p>
//           </div>
//         </div>

//         <div className="text-right">
//           <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center  justify-end" >
//             <Calendar className="w-4 h-4" />
//             <span>{formatDate(startDate)}</span>
//             <span className="mx-1">—</span>
//             <span>{formatDate(endDate)}</span>
//           </div>
//           <div className="text-xs text-gray-400 mt-1 flex items-center gap-2 justify-end">
//             <Clock className="w-3.5 h-3.5" />
//             <span>#{Math.ceil((Number(new Date(endDate)) - Number(new Date(startDate))) / (1000 * 60 * 60 * 24) + 1)} day(s)</span>
//           </div>
//         </div>
//       </header>

//       <main className="mt-7 ">
//         <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{brief}</p>

//         <div className="mt-4">
//           <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
//             <div
//               className="h-2.5 rounded-full"
//               style={{ width: `${pct}%`, background: "linear-gradient(90deg,#7c3aed,#6366f1)" }}
//             />
//           </div>
//           <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
//             <span>{pct}% complete</span>
//             <span>{pct < 100 ? "In progress" : "Completed"}</span>
//           </div>
//         </div>

        
//       </main>

//       <footer className="mt-5 flex items-center justify-end">
       
//         <div className="flex items-center gap-3">
         
//          <button onClick={async ()=>{
//           const userNotes = await getNotes({folderKey:`${id} ${title}/notes/notes.pdf`});
//           if(userNotes){

//             window.open(userNotes)
//           }
//          }} className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm hover:brightness-95 hover:cursor-pointer">View Notes</button>

          
//           <button className="px-3 py-1.5 rounded-lg bg-linear-150 from-white to-indigo-100  text-gray-900 border text-sm hover:brightness-95 hover:cursor-pointer" onClick={()=>{
             
//               router.push(`/revisly/revision/${id}`);

//           }}>View all session</button>
        
//         </div>
//       </footer>
//     </motion.article>
//   );
// }


const SessionCard = (
  {
  sessionNumber = 1,
  title = "Revision Session",
  startDate = new Date(),
  endDate = new Date(),
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

  
}
) => {
  

  return (
    <div className="min-w-lg mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header with date */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Calendar size={16} />
          <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Clock size={14} />
          <span>10 day(s)</span>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6">
        {/* Title section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <BookOpen className="text-white" size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
            <p className="text-gray-500 text-sm font-medium">Session #{sessionNumber}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm">{brief}</p>
        </div>

        {/* Progress section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BarChart3 size={16} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Progress</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-indigo-600">{progress}%</span>
           
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            View Notes
          </button>
          <button className="flex-1 cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            View All Sessions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
