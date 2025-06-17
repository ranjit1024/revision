import { AlarmCheckIcon } from "lucide-react";
export default function Notification() {
    const date = new Date();
  return (
    
      <div className="flex mt-4 gap-2 h-fit  justify-center flex-col px-4 py-2  bg-blue-300/10 rounded-sm">
        <div className="flex justify-between mb-4 items-center">
        <div className="flex items-center gap-3">
          <div className="p-1 bg-accent rounded-full text-chart-5">
            <AlarmCheckIcon className="size-5"/>
          </div>
          <p className="text-orange-500 font-medium">Reminder</p>
        </div>
        <div>
            <p className="text-[0.8rem] font-medium text-muted-foreground">{date.toLocaleDateString()}</p>
        </div>
        </div>
        <div>
          <p className="w-[100%] text-center"></p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ab
          suscipit
        </div>
        <div className="text-end mt-3 font-medium text-sm  text-blue-500">
            <a className="hover:cursor-pointer text-[1rem] hover:underline underline-offset-2">Revise</a>
        </div>
      </div>
    
  );
}
