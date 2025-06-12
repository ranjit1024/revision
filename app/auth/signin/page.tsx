'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { div } from "framer-motion/client"
import Image from "next/image"
import singin from "../../../public/test.png"

export default function LoginForm() {
    const navigation = useRouter()
  return <div className="w-full grid grid-cols-[50%_50%]">
    <div className="flex  justify-center items-center bg-center bg-contain flex-col bg-green-50">
       <div className="flex absolute top-3 left-1 items-center gap-2 max-md:ml-2 ">
              <div className="bg-[url(../public/revisly.png)] bg-center bg-cover bg-no-repeat rounded-full h-8 w-8"></div>
              <p className="font-semibold text-[1.2rem]  text-input/90">
                Revisly
              </p>
            </div>
      <Image src={singin} height={40} width={400} alt="image"/> 
      <h1 className="text-3xl font-medium text-neutral-800">Revisly</h1>
      <p>Revise Smarter. Learn Faster.</p>
    </div>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
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

          <Button className="w-full bg-blue-700 text-white hover:bg-blue-800">
            Login
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
