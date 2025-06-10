import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignupForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Create Account</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input id="password" type="password" placeholder="••••••••" />
            <p className="mt-1 text-xs text-gray-400">Must be at least 8 characters.</p>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <Input id="confirm-password" type="password" placeholder="••••••••" />
          </div>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign up with Google
          </Button>

          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Sign Up
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
