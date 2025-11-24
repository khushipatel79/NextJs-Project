"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { ContactType } from "../_types/contact"

const Clientpage = () => {
  const [data, setData] = useState([])
  const [userId, setUserId] = useState<number | null>(null);

  const getData = async () => {
    const sessionRes = await axios.get("/api/session");
    console.log(sessionRes);

    const session = sessionRes.data;

    if (!session || !session.id) {
      setData([]);
      return;
    }

   setUserId(Number(session.id));

    const result = await axios.get<ContactType[]>(
      `http://localhost:3001/contacts?userId=${session.id}`
    );

    setData(result.data);
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
