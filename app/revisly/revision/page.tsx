"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectScrollable } from "@/components/ui/defaultIntervel";
import { Button } from "@/components/ui/button";
import TimePicker from "@/components/ui/time";
import Lottie from "lottie-react"
import animaiton from "../../../public/Animation-2.json"
export default function Home() {
    return <div className="h-[90vh] ">
        <div className="bg-white shadow p-5 rounded-md ">
            <p className="font-bold text-2xl text-neutral-800">Set Revision Reminder</p>
            <p className="mt-1">Here we use <span>space  Repetion system</span><span> Click here to understand how it is work</span></p>
            <div className="pt-7 w-full">
                <div className="w-full flex text-center items-center gap-4  justify-center h-full">
                    <div className="w-[100%] ">
                        <Label className="mb-2 " >Topic Name</Label>
                        <Input placeholder="Enter Topic Name"></Input>
                    </div>

                </div>
                <div className="mt-6">

                    <SelectScrollable />
                </div>


                <div className="w-100 mt-7 hover:cursor-pointer  ">
                    <Label className="pb-2">Select Time</Label>
                    <TimePicker />

                </div>

                <div>
                {/* <Lottie animationData={animaiton} loop={true} className="size-10"  /> */}
                </div>

                <Button className="mt-8 bg-secondary hover:cursor-pointer">Set Revision Reminder</Button>

            </div>
        </div>
    </div>
}