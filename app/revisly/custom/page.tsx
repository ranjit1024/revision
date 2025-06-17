import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DrawerDemo } from "@/components/ui/intervel";
import { Label } from "@/components/ui/label";
import {DateRangePicker} from "@/components/ui/range";
import TimePicker from "@/components/ui/time";
export default function Home(){
    return <div className="h-[90vh]">
        <div className="bg-white shadow p-5  rounded-md ">
            <p className="font-bold text-2xl text-neutral-800">Set Revision Reminder</p>
            <div className="pt-7 w-full">
                <div className="w-full flex text-center items-center gap-4  justify-center ">
                    <div className="w-[100%] ">
                <Label className="mb-2 " >Topic Name</Label>
                <Input placeholder="Enter Topic Name"></Input>
                    </div>
             
                </div>
            </div>
            
                <div>
                <Label className="mt-8 mb-2">Selct Date Range</Label>
                <DateRangePicker className="w-full"/>
                </div>
                <div className="w-100 mt-7 hover:cursor-pointer  ">
                <Label className="pb-2">Select Time</Label>
                <TimePicker />
                
                </div>
               
            <div className="mt-8 hover:cursor-pointer  ">
                <Label className="pb-2">Selct Intervel</Label>
                <DrawerDemo/>
                
                </div>
            
                <div className="mt-10 text-start">
                    <Button className="bg-secondary hover:cursor-pointer">Set Revision Reminder</Button>
                </div>

        </div>
    </div>
}