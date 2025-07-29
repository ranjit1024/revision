
import { BellIcon } from "lucide-react";

export default function Notification() {
  return (
    <div className="w-80 p-5 rounded-2xl bg-white  border border-gray-100 space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-orange-500 font-medium text-sm">
          <BellIcon className="w-4 h-4 " />
          <span>Reminder</span>
        </div>
        <span className="text-xs text-gray-400">18/06/2025</span>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ab suscipit.
      </p>

      <button className="text-blue-600 hover:text-blue-700 transition text-sm font-semibold hover:underline underline-offset-2 hover:cursor-pointer">
        Revise
      </button>
    </div>
  );
}
