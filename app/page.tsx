"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Logo from "../public/revisly.png"
import Image from "next/image";
import side from "../public/side.png"
export default function Home() {
  const navigation = useRouter();

  return (
   <div className="px-8 py-4 bg-gray-50 h-[100%]">
    <header>
      <div className="flex items-center justify-between gap-2 rounded-full">
        <div className="flex items-center gap-2">
      <Image src={Logo} width={25} height={10} alt="logo" ></Image>
      <p className="text-[1rem] font-semibold text-neutral-900">Revisly</p>
        </div>
      <div className="flex gap-2 items-center">
        <Button className="bg-gray-50 text-primary hover:cursor-pointer hover:bg-white">Login</Button>
        <Button className="hover:cursor-pointer ">Join</Button>
      </div>
      </div>
    </header>
    <div className="grid grid-cols-2 mt-10 h-[90vh]  ">
      <div>
        
      </div>
      <div className="bg-[url(../public/side.png)] w-[100%] bg-gray-100 bg-center bg-contain bg-no-repeat">
        {/* <Image src={side} height={100} width={500} alt="fsd"/> */}
      </div>
    </div>
   </div>
  );
}
