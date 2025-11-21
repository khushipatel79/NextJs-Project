"use client"

import axios from "axios"
import { useEffect, useState } from "react"

const Clientpage = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const result = await axios.get("http://localhost:3001/contacts")
    setData(result.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div>
          <h1>CLIENT SIDE</h1>
        </div>
        <div className="flex flex-col bg-white rounded p-4">
          {data.length >= 1 ? (
            data.map((item, index) => (
              <div key={index}>
                <h2>{item.name} : {item.email}</h2>
              </div>
            ))
          ) : (
            <div>
              <h1>no data</h1>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default Clientpage
