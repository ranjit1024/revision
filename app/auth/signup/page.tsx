import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignupForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">Create Account</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>

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

          <div>
            <label htmlFor="confirm-password" className="mb-1 block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Input id="confirm-password" type="password" placeholder="••••••••" />
          </div>

          <Button variant="outline" className="w-full hover:cursor-pointer flex items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign up with Google
          </Button>

          <Button className="w-full bg-blue-700 text-white hover:bg-blue-800">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}
