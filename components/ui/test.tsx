export default function Test() {
  return (
    <div className="bg-white  p-4 rounded-xl shadow-sm border hover:shadow-md transition-transform duration-200 hover:scale-[1.01] border-gray-200 ">

   
    <div className="flex justify-between items-start   mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
          <h2 className="text-lg font-semibold text-gray-900">Topic Name</h2>
        </div>
        <div className="text-gray-500 text-sm flex items-center space-x-1 mt-2 ml-3">
          <span>📅</span>
          <span className="text-muted">6/13/2025 - 6/13/2025</span>
        </div>
      </div>
      <div className="text-right text-sm">
        <p className="text-gray-500">Score</p>
        <p className="text-blue-600 font-semibold text-base">8/10</p>
      </div>

    </div>
    <div className="text-end ">
    <button className="text-blue-700 text-base hover:cursor-pointer hover:text-blue-950">Full report</button>
    </div>
    </div>
  );
}
