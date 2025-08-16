"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectScrollable } from "@/components/ui/defaultIntervel";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import TimePicker from "@/components/ui/time";
import { useDispatch } from "react-redux";
import { actions } from "@/store/slices/revison";
import React, { useState } from "react";
import { RootState } from "@/store/store";
import axios from "axios"
import NotesgeneratorLoader from "@/components/ui/notestgenratorLading";
import { CalendarDays, Clock, Info, Layers, Send } from "lucide-react";
export default function Home() {
  const dispatch = useDispatch();
  const sessionData = useSelector((state: RootState) => {
    const data = {
      topic: state.revision.topic,
      sessionIntervel: state.revision.sessionIntervel,
      sessions: state.revision.sessions,
      time: state.revision.time,
      totaldays: state.revision.totalDays
    };
    return data;
  });
  const [sendData, setSendData] = useState<boolean>(false);

  return (
    <div className="h-[10vh] ">
      {

        sendData ? <NotesgeneratorLoader /> : null
      }
      <div className="bg-white shadow p-5 rounded-md ">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Set Revision Reminder
            </h1>
            <p className="mt-1 text-sm text-zinc-600 flex">
              We use <span className="font-medium text-emerald-700">spaced repetition</span> to help you retain more with less time.
              <button className="ml-2 inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800">
                <Info size={14} />
                <span className="text-xs font-medium">How it works</span>
              </button>
            </p>
          </div>
          <div className="hidden rounded-xl bg-emerald-50 px-3 py-2 text-emerald-700 ring-1 ring-emerald-100 sm:flex items-center gap-2">
            <CalendarDays size={16} />
            <span className="text-sm font-medium">Revise Smartly</span>
          </div>
        </div>
        <div className="pt-6 w-full">
          <div className="w-full flex text-start items-start gap-4  justify-start h-full">
            <div className="w-[100%] ">


              <label className="block text-sm font-medium text-zinc-700 text-start ml-1" htmlFor="topic">
                Topic Name
              </label>
              <div className="mt-2">
                <div className="relative">
                  <input
                    onBlur={(e) => {
                      console.log(e.currentTarget.value);
                      dispatch(actions.addTopic({
                        topic: e.currentTarget.value
                      }))
                    }}
                    id="topic"

                    placeholder="e.g., System Design — Caching"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                  />
                  <Layers className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                </div>
              </div>



            </div>

          </div>
          <div className="mt-6">
            <SelectScrollable />
          </div>

          <div className="w-100 mt-7 hover:cursor-pointer  ">
           
            <TimePicker />
          </div>

          <div>
            {/* <Progress value={33} /> */}
          </div>



          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={async () => {
                console.log(sessionData);
                setSendData(prev => true);

                const response = await axios.post('http://localhost:3000/api/revision',
                  sessionData
                );
                console.log(response);
                setSendData(prev => false);



              }}
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 active:translate-y-px"

            >
              <Send size={16} />
              Set Revision Reminder
            </button>

            <button className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline">
              Preview schedule
            </button>
          </div>



        </div>
      </div>
    </div >
  );
}

