"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectScrollable } from "@/components/ui/defaultIntervel";
import { Button } from "@/components/ui/button";
import { useSelector, UseSelector } from "react-redux";
import TimePicker from "@/components/ui/time";
import { useDispatch } from "react-redux";
import { actions } from "@/store/slices/revison";
import React from "react";
import {  RootState } from "@/store/store";
import axios from "axios"
import { Progress } from "@/components/ui/progress"
export default function Home() {
  const dispatch = useDispatch();
  const sessionData = useSelector((state: RootState) => {
    const data = {
      topic: state.revision.topic,
      sessionIntervel: state.revision.sessionIntervel,
      sessions: state.revision.sessions,
      time: state.revision.time,
      totaldays:state.revision.totalDays
    };
    return data;
  });

  return (
    <div className="h-[10vh] ">
      <div className="bg-white shadow p-5 rounded-md ">
        <p className="font-bold text-2xl text-neutral-800">
          Set Revision Reminder
        </p>
        <p className="mt-1">
          Here we use <span>space Repetion system</span>
          <span> Click here to understand how it is work</span>
        </p>
        <div className="pt-7 w-full">
          <div className="w-full flex text-center items-center gap-4  justify-center h-full">
            <div className="w-[100%] ">
              <Label className="mb-2 ">Topic Name</Label>
              <Input
                onBlur={(e) => {
                  console.log(e.currentTarget.value);
                  dispatch(actions.addTopic({
                    topic:e.currentTarget.value
                  }))
                }}
                placeholder="Enter Topic Name"
              ></Input>
            </div>
          </div>
          <div className="mt-6">
            <SelectScrollable />
          </div>

          <div className="w-100 mt-7 hover:cursor-pointer  ">
            <Label className="pb-2">Select Revsion Time</Label>
            <TimePicker />
          </div>

          <div>
            {/* <Progress value={33} /> */}
          </div>
            
          <Button
            onClick={() => {
              console.log(sessionData);
              axios.post('http://localhost:3000/api/revision',
                sessionData
              )
            }}
            className="mt-8 bg-secondary -z-10 hover:cursor-pointer"
          >
            Set Revision Reminder
          </Button>
        </div>
      </div>
    </div>
  );
}
