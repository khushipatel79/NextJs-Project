import { NextResponse } from "next/server"

 export const GET = () => {
  return NextResponse.json({
    message:"hello , this is the API route !",
    status : "success"
  })
}
