// this is server component by default
import LoginForm from "@/app/_component/LoginForm"
import Link from "next/link"

const LoginPage = () => {
  return (
    <>
      <div className="max-w-md max-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <LoginForm/>
          <p className="mt-4 text-center">Don't have an account ? <Link href={"/register"} className="font-bold text-blue-500 hover:underline hover:text-red-500">Register</Link></p>
      </div>
    </>
  )
}

export default LoginPage
