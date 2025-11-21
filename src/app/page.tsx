import Image from "next/image"
import { getSession } from "./_lib/session"
import userImage from "../../public/userImage.png"
import Link from "next/link"

const page = async () => {
  const session = await getSession()
  return (
    <div>
      {
        session ? (
          <>
            <div className=" flex flex-col items-center justify-items-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold"> Welcome to users manager</h1>
                <p className="mt-2 text-lg text-gray-600">Manage your user easily and efficiently</p>
              </div>
              <Image src={userImage} alt="flower image" width={300} height={300} className="rounded-lg shadow-lg" />
              <div className="text-center">
                <p className="mt-2 text-lg text-gray-600">Start managing your users !</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" flex flex-col items-center justify-items-center min-h-screen">
              <div className="text-center flex flex-col gap-5">
                <h1 className="text-4xl"> Welcome to users manager</h1>
                <p className="text-5xl font-bold">Login First to Manage User Data !!</p>
                <div className="flex gap-5 items-center justify-center">
                  <p className="text-red-600 underline cursor-pointer">
                    <Link href={"/login"}>Login</Link>
                  </p>
                  <p className="text-red-600 underline cursor-pointer">
                    <Link href={"/register"}>Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default page
