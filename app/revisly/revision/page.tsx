
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Home(){
    return <div className="h-[90vh] ">
        <div className="bg-white shadow p-5 rounded-md ">
            <p className="font-bold text-2xl text-neutral-800">Set Revision Reminder</p>
            <div className="pt-7 w-full">
                <div className="w-full flex text-center items-center gap-4  justify-center h-full">
                    <div className="w-[100%] ">
                <Label className="mb-2 " >Topic Name</Label>
                <Input placeholder="Enter Topic Name"></Input>
                    </div>
             
                </div>
            </div>
            </div>
    </div>
}