import { Button } from "@/components/ui/button";
import back from "../public/background.jpg"
export default function Home() {
  return (
    <div className="">
      <div className="h-[90vh] bg-cover    bg-no-repeat w-[100vw]  ">
      <div className="px-20 py-5 z-2 flex justify-between items-center">
        <p className="font-semibold text-[1.5rem]  text-neutral-700">Revison</p>
        <div className="flex list-none gap-10 items-center justify-center ">
          <li>Home </li>
          <li>feature</li>
          <li>about</li>
        </div>
        <Button className="text-md font-medium hover:cursor-pointer " >Sing in</Button>
      </div>
      </div>
      
    </div>
  );
}
