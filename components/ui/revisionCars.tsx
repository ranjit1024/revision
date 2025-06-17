import { CircleAlertIcon } from "lucide-react"
export default function Card(){
    return <div className="w-[33%] p-5 bg-card rounded-xl shadow">
        <div className="">
            <div className="flex items-center gap-2">
            <CircleAlertIcon className="size-5"/>
            <p className="text-xl font-medium">Topic name</p>
            </div>
        </div>
    </div>
}