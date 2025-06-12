"use client";
import { ChartBarLabelCustom } from "@/components/ui/last5";
import Retation from "@/components/ui/retation";
import { Subject } from "@/components/ui/subjects";

export default function Home() {
  return (
    <div>
      <div className="w-[100%] grid grid-cols-2 gap-2">
        <div className="first">

     
        <div className=" bg-white max-md:mb-5 rounded-xl shadow-sm w-[100%] max-md:m-2 h-fit">
          <div className="p-5">
            <p className="font-normal text-lg text-black mb-1">Current Topic</p>
            <p className="text-sm">topic name</p>
            <div className="my-8 bg-green-200 h-2 rounded-2xl z-0">
              <div className="bg-green-500 w-[10%] relative rounded-2xl h-full">
                <div className="bg-green-500 border-3 border-gray-100 -top-1 absolute left-10 w-4 h-4  rounded-full "></div>
              </div>
            </div>
            <p className="mt-4 text-[1.1rem] text-gray-600">
              You’re{" "}
              <span className="text-green-600 font-semibold">
                ahead of pace
              </span>{" "}
              and should reach your goal{" "}
              <span className="font-medium text-gray-900">
                {" "}
                ahead of schedule.
              </span>
            </p>
          </div>
        </div>

        <div className="w-[100%] mt-5 ">
          <ChartBarLabelCustom/>
        </div>
        </div>

        <div className="second">
            <Retation/>
            <div className="mt-5">
            <Subject />
            </div>
        </div>
      </div>
    </div>
  );
}
