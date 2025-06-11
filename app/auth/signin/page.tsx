'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
export default function LoginForm() {
    const navigation = useRouter()
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">Sign In</h2>

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
            <a href="/login" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
