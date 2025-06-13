import { ReactNode } from "react";
import {
  LayoutDashboardIcon,
  HandCoins,
  ChartColumnStacked,
  Settings,
  CirclePlus,
  Sparkle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import user from "../../public/user.jpg"
import Image from "next/image";
 

export default function Home({ children }: { children: ReactNode }) {
  const date =  new Date();

  return (
    <div className="h-[100%] bg-gray-100 ">
 


    <div className=" bg-white border-b-gray-300 border-b-1 grid grid-cols-[20%_80%]">

      <div className=" border-r-1 border-r-gray-300 p-2  ">
             <div className="flex items-center gap-2 max-md:ml-2     ">
          <div className="bg-[url(../public/slogo.png)] bg-center bg-cover bg-no-repeat rounded-full h-6 w-6"></div>
          <p className="font-semibold text-[1.2rem]  text-input/90">Revisly</p>
        </div>
        </div>
      <div className=" flex px-3 justify-between items-center">
          <div>
            <p className="text-md font-normal">👋 Hello name</p>
          </div>
        
          <div className="flex gap-3 items-center  ">
            <div className="inline-flex ">
              <Button className="inline-flex items-center gap-2 bg-primary  hover:cursor-pointer">
                <CirclePlus className="size-4 text-gray-50"/>
                <p>Set Revision</p>
              </Button>
            </div>
              <div className="w-[1] h-10 border-r-1 mx-3 border-r-gray-300 bg-gray-200 ">
                
              </div>
            <div className="prifile flex items-center gap-2 hover:cursor-pointer hover:scale-102">
                <Image src={user} height={20} width={30} alt="user" className="rounded-2xl"/>
                

              <p className="text-sm font-n">Ranjit das</p>
            
                
            </div>
          </div>
        
        </div>
      </div>
      <div className="h-[90%] grid grid-cols-[20%_80%]">
          <div className=" bg-white relative h-full border-r-1 border-gray-300   ">
      

        <div className="mt-5 p-2 space-y-2    ">
          <div className="flex items-center gap-2 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <LayoutDashboardIcon className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">Dashboard</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <Sparkle className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">All revision</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <ChartColumnStacked className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">
              Test/quix report
            </p>
          </div>
                <div className="flex  items-center gap-2 w-full hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <Settings className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">Settings</p>
          </div>
        </div>

   
      </div>
      <div className="p-3">
        {children}
      </div>
      </div>
      
      {/* <div className=" bg-gray-100 relative h-full border-r-1 border-gray-300   ">
        <div className="flex items-center gap-2 max-md:ml-2 border-b-1 border-r-1 bg-gray-100 border-gray-400 p-2 ">
          <div className="bg-[url(../public/slogo.png)] bg-center bg-cover bg-no-repeat rounded-full h-6 w-6"></div>
          <p className="font-semibold text-[1.2rem]  text-input/90">Revisly</p>
        </div>

        <div className="mt-5 p-2 space-y-2    ">
          <div className="flex items-center gap-2 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <LayoutDashboardIcon className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">Dashboard</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <Sparkle className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">All revision</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <ChartColumnStacked className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">
              Test/quix report
            </p>
          </div>
        </div>

        <div className="border-t-2 relative top-88 p-2  ">
          <div className="flex items-center gap-2 hover:bg-primary/10 rounded-md hover:cursor-pointer py-2 px-1">
            <Settings className="size-4 text-gray-900" />
            <p className="text-sm text-neutral-800 font-medium">Settings</p>
          </div>
        </div>
      </div>
      <div className="h-[7.5%]">
        <div className=" bg-gray-100 relative h-full  border-b-1 flex items-center justify-between px-5  border-gray-400">
          <div>
            <p>Dashboard</p>
          </div>
          <div className="flex gap-3 items-center  ">
            <div className="inline-flex">
              <Button className="inline-flex items-center gap-2 bg-primary hover:cursor-pointer">
                <CirclePlus className="size-4 text-gray-50"/>
                <p>Set Revision</p>
              </Button>
              <div className="pl-4 border-r-2 border-r-gray-300"></div>
            </div>
            <div className="prifile flex items-center gap-2 hover:cursor-pointer hover:scale-102">
                <Image src={user} height={20} width={30} alt="user" className="rounded-2xl"/>
                

              <p className="text-sm font-n">Ranjit das</p>
            
                
            </div>
          </div>
        </div>
      <div>
        {children}
      </div>
      </div> */}
    </div>
  );
}
