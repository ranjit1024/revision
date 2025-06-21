'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Loader from "@/components/ui/loader"
import Image from "next/image";
import singin from "../../../public/info.png";
import { useState } from "react"

export default function LoginForm() {
    const navigation = useRouter()
    const [loader , setLoader] = useState<boolean>(false);

  return <div className="w-full grid grid-cols-[50%_50%] relative">
    {loader ? <Loader/> : null}
    <div className="flex  justify-center items-center bg-center bg-contain flex-col bg-[url(../public/info.png)] bg-no-repeat bg-white">
       <div className="flex absolute top-13 bg-white  left-53 items-center gap-2 max-md:ml-2 ">
              <div className="bg-[url(../public/revisly.png)] bg-center bg-cover bg-no-repeat rounded-full h-5 w-5"></div>
              <p className="font-semibold text-[1rem] text-input/90">
                Revisly
              </p>
            </div>

      
    </div>
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-lg rounded-2xl p-8 ">
       
        <h2 className="mb-6 text-center text-2xl font-semibold">Welcome Back</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>


          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          

          <Button variant="outline" className="w-full flex items-center justify-center gap-2 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            Login with Google
          </Button>

          <Button onClick={async ()=>{
            setLoader(true);
            localStorage.setItem("data", "fasljfalk")
            await new Promise(r => setTimeout(r,3000));
            setLoader(false)
          }} className="w-full hover:cursor-pointer bg-primary text-white ">
            Sign in
          </Button>
           <p className="text-center text-sm text-gray-500">
            New to Revision ?{" "}
            <a href="" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
}
