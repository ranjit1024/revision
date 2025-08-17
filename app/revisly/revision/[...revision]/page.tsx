"use client"
import { RevisionCard } from "@/components/ui/score";
import GetdetailSession from "@/lib/actions/getDetailsSession";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Skeleton from "@/components/ui/cardSkeleton";
import { getSessionBrif } from "@/lib/actions/getDetailsSession";
type Status = 'COMPLETED' | 'PENDING' ;
interface revisionDetails {
    id: string;
    email: string;
    topic: string;
    sessionNumber: number;
    score: number;
    revisionid: string;
    reminderDate: Date;
    status: Status
    
}
export default function Page() {
  const [sessionDetails, setSessionDetails] = useState<revisionDetails[] | null>(null)
  const [brif, setBrif] = useState<string | null >(null)

  const pathname = usePathname();
  const sessionid = pathname.split('/')[3]; 
  console.log(sessionid)
  useEffect(()=>{
    async function getdetails(){
      const details = await GetdetailSession(sessionid);
      setSessionDetails(details)
      console.log(details)
    }
    async function getBrif() {
      const brifFuncion  = await getSessionBrif(sessionid);
      const brif :string = String(brifFuncion?.revision.brif)
      setBrif(brif)
    }
    getBrif()
    getdetails()
  },[])
  

  return (
    <div className="px-6 py-8 bg-white rounded-xl">
      <h1 className="text-5xl font-semibold text-gray-900">{sessionDetails?.slice(0).at(0)?.topic === undefined ? <div className="bg-gray-100/70 h-12 w-100 flex flex-col gap-2  animate-pulse rounded-2xl">
     
          
      </div>:<div>{sessionDetails?.slice(0).at(0)?.topic}</div> }</h1>
      <div className="text-gray-800 mt-5 ml-1 font-medium text-md max-w-[90%]">
     
    {brif}
      </div>
      <p className="text-md text-gray-400 mt-7">Revision / Upcoming revision</p>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {
          sessionDetails === null
            ?<div className="h-[100vh]  grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[75vw] ">
              <Skeleton className="h-full w-full" />
                    <Skeleton className="h-full w-full" />
                    <Skeleton className="h-full w-full" />
                    <Skeleton className="h-full w-full" />
                    <Skeleton className="h-full w-full" />
                    <Skeleton className="h-full w-full" />
                    </div> : sessionDetails.map((data,index)=>{
                      return <RevisionCard
              key={index}
              title={`Session ${data.sessionNumber}`}
              status={String(data.status) as Status}
              date={`${data.reminderDate}`}
              progressText={`${data.score}/10`}
              onViewReport={() => console.log("View Report clicked")}
            />
                    })
        }

      </div>
    </div>
  );
}
