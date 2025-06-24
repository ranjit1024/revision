'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Loader from "@/components/ui/loader"
import { useEffect, useState } from "react"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function LoginForm() {
    const router = useRouter();
    const { data:session, status} = useSession();
    const [loader , setLoader] = useState<boolean>(false);
    useEffect(()=>{
      if(status === "authenticated"){
        router.push("/revisly/home")
      }
    },[session,router])
    if (status === "loading") return <Loader/>
  return <div className="w-full grid grid-cols-[50%_50%] relative">
    
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
       


      

          

          <Button
          onClick={()=>signIn("google", {callbackUrl: "/auth/signin"})}
          variant="outline" className="w-full flex items-center justify-center gap-2 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            Login with Google
          </Button>

      
        </div>
      </div>
    </div>
    </div>
}
