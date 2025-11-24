"use client"
import Link from "next/link"
import { useState } from "react"

const DestinationPage = () => {
    const [name, setname] = useState("")
    return (
        <>
            <div className="bg-white p-5 flex  items-center justify-center">
                <div className="flex  flex-col gap-5 items-center justify-center border p-5 rounded border-gray-400">
                    <h2 className="text-3xl font-bold">Enter your Name !!!</h2>
                    <input type="text" className="border rounded border-gray-400" onChange={(e) => setname(e.target.value)} />
                    <Link href={`/destination/${name}`} className="bg-gray-200 p-3 rounded"><button>Search</button></Link>
                </div>
            </div>
        </>
    )
}

export default DestinationPage
