"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectScrollable } from "@/components/ui/defaultIntervel";
import { Button } from "@/components/ui/button";
import { useSelector, UseSelector } from "react-redux";
import TimePicker from "@/components/ui/time";
import { useDispatch } from 'react-redux';
import { actions } from "@/store/slices/revison";
import { ChangeEvent, useEffect, useState } from "react";
import { revisionSchemaType } from "@/app/api/revision/route";
import { AppDispatch, RootState } from "@/store/store";
export default function Home() {
  const dispatch = useDispatch();
  const sessionDate = useSelector((state:RootState)=>{
    return  state.revision.session
  })
  const [data, setData] = useState<revisionSchemaType>({
    sessionTopic: "",
    sessionIntervel: "",
    sessionTime: "",
  });

  const handleChnage = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  
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
                name="sessionTopic"
                value={data.sessionTopic}
                onChange={handleChnage}
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
            {/* <Lottie animationData={animaiton} loop={true} className="size-10"  /> */}
          </div>

          <Button
            
            onClick={() => {
              dispatch(actions.addSession({
                session:data.sessionTopic
              }))
              console.log(sessionDate)
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
