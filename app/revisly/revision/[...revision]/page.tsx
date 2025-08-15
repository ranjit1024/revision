"use client"
import {RevisionCard} from "@/components/ui/score";
export default function Page() {
  const date = new Date();
  return (
    <div className="px-6 py-8 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-900">Topic Name</h1>
      <p className="text-gray-600 mt-1 max-w-[90%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
        numquam eum voluptatibus totam dolore culpa rem sed mollitia quo
        exercitationem sint ut impedit illo velit odio ducimus saepe atque
        voluptatum.
      </p>
      <p className="text-sm text-gray-400 mt-6">Revision / Upcoming revision</p>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
     
        <RevisionCard
  title="Revision 1/10"
  status="Completed"
  date="2025-08-15"
  progressText="1/10"
  onViewReport={() => console.log("View Report clicked")}
/>
   <RevisionCard
  title="Revision 1/10"
  status="Completed"
  date="2025-08-15"
  progressText="1/10"
  onViewReport={() => console.log("View Report clicked")}
/>   <RevisionCard
  title="Revision 1/10"
  status="Completed"
  date="2025-08-15"
  progressText="1/10"
  onViewReport={() => console.log("View Report clicked")}
/>
      </div>
    </div>
  );
}
