"use client";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { actions } from "@/store/slices/revison";
interface intervelType{
revision: number;
    days: number;
    totalDays: number;
}
export function SelectScrollable() {
  const dispatch = useDispatch();
  const intervel = [1, 2, 4, 7, 16, 30, 60, 90, 120, 180, 365];
  const totalDays = [1, 3, 7, 14, 30, 60, 120, 210, 330, 510, 875];
  const [showDetails, setShowdetails] = React.useState(false);
  const [selectedIntervel, setSelectdIntervel] = React.useState<
    number[] | undefined
  >([]);
  const [selectdSession, setSelectedSession] = React.useState<number[] | null>([]);
  const [value, setValue] = React.useState< intervelType | null>(null);

  return (
    <Select
      onValueChange={(e) => {
        setShowdetails(true);
        const item :intervelType  = JSON.parse(e);
        
        setValue(prev =>  {
          return {

            ...prev,
            revision:item.revision,
            days:item.days,
            totalDays:item.totalDays
          }
        });
        console.log(item.totalDays)
        
        dispatch(actions.addSessionInterl({
          sessionIntervel : intervel.filter(data =>  data <= item.days),
          
        }))
        dispatch(actions.addSessions({
          sessions:intervel.filter(data =>  data <= item.days).length
        }))

        dispatch(actions.addTotalDays({
          totalDays:item.totalDays
        }))
      }}
    >
      
              <label className="block text-sm font-medium text-zinc-700 text-start ml-2 mb-1" htmlFor="topic">
                Selct intervel
              </label>
      <SelectTrigger className="w-full  rounded-xl border border-zinc-200 bg-white px-4 py-5 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100 ">
        <SelectValue  placeholder="Select a Intervel" />
      </SelectTrigger>
      <SelectContent
      
        onChange={() => {
          
          console.log("done");
        }}
      >
        <SelectGroup   >
          <SelectLabel className="">
            <div className="flex justify-between w-[100%]">
              <div className="w-100 flex justify-center  font-medium">
                Session
              </div>
              <div className="w-100 flex justify-center font-medium">
                Days After Last Session
              </div>
              <div className="w-100 flex justify-center font-medium">
                Total Days
              </div>
            </div>
          </SelectLabel>

          {intervel.map((item , index) => {
            return (
              <SelectItem
                value={JSON.stringify({
                  revision: index,
                  days: intervel[index],
                  totalDays: totalDays[index],
                })}
                key={index}
                className="flex justify-between items-center gap-10 w-[90%]"
              >
                <div
                  onChange={() => {
                    console.log("change");
                  }}
                  className=" w-100 flex justify-center"
                >
                  {index+1}
                </div>
                <div className="  flex justify-center w-100">{item}</div>
                <div className="  w-100 flex  justify-center ">
                  {totalDays[index]}
                </div>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
      {showDetails ? (
        <p className="text-sm font-medium mt-2 text-muted">
          you have shedule for {value ? value.revision + 1 : null}&nbsp;
          session which will take {value?.totalDays} days to complete
        </p>
      ) : null}
    </Select>
  );
}

function SpacedRepetitionTable() {
  const schedule = [
    { day: "Day 1", activity: "Learn it" },
    { day: "Day 2", activity: "First Review" },
    { day: "Day 4", activity: "Second Review" },
    { day: "Day 7", activity: "Third Review" },
    { day: "Day 14", activity: "Final Review" },
  ];

  return (
    <div className="max-w-md mx-auto mt-6 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 p-4 border-b text-center text-lg font-semibold text-gray-800">
        Spaced Repetition Schedule
      </div>
      <div className="divide-y divide-gray-200">
        {schedule.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 "
          >
            <span className="font-medium text-gray-900">{item.day}</span>
            <span>{item.activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}