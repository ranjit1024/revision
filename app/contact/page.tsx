import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function Home(){
    return <div className="w-[100%]">
    <div className="flex flex-col p-10 justify-center items-center w-[100%]">
        <h1 className="text-[2rem] font-medium">Contact us</h1>
        <div className="w-[70%]">

        <label   className="p-1">Enter query</label>
        <Input placeholder="Type query"></Input>
        </div>
        <div className="w-[70%] mt-5 flex flex-col">

        <label className="p-1">describe query</label>
        <textarea className="border-1  border-black rounded-2xl p-3"></textarea>
        <div className="text-end mt-10">
            <Button>Submit</Button>
        </div>
        </div>
    </div>
    </div>
}