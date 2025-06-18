import { CalendarDays } from "lucide-react";

export default function Test() {
  return (
    <div className="flex justify-between items-center p-5 w-[100%] rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition  ">
      {/* Left side */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full" />
          <span>Topic Name</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 gap-1">
          <CalendarDays className="w-4 h-4 text-gray-400" />
          <span>6/13/2025 - 6/13/2025</span>
        </div>
      </div>

      {/* Right side */}
      <div className="text-right space-y-1">
        <div className="text-sm text-gray-500">Score</div>
        <div className="text-blue-600 font-bold text-lg">8/10</div>
        <button className="text-sm text-blue-500 hover:underline">
          Full report
        </button>
      </div>
    </div>
  );
}
