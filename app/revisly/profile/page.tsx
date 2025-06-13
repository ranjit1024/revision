import user from ".././../../public/user.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function () {
  return (
    <div className="h-[100vh]">
      <div className="w-[100%] bg-white rounded-lg p-5 ">
        <div className="flex  justify-between w-fit items-center  gap-2 ">
          <div className="rounded-full p-1 bg-gray-50 w-fit">
            <Image
              src={user}
              height={100}
              width={110}
              alt="user"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-[2rem] font-semibold">Ranjit das</h1>
            <p className="-mt-2 text-gray-600 font-semibold">
              ranjit@gmail.com
            </p>
          </div>
        </div>

        <div className="pt-10  space-y-6">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input id="email" type="email" placeholder="ranjit das" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              password
            </label>
            <Input id="email" type="email" disabled placeholder="**************" className="text-black "/>
            <p className="text-end text-sm mt-2 pr-2 text-primary hover:underline underline-offset-3 hover:cursor-pointer " >change password</p>
          </div>
          <div className="text-end">
          <Button className="text-end hover:cursor-pointer">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
