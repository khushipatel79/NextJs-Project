"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactType } from "@/app/_types/contact";

const ContactPage = () => {
  const [data, setData] = useState<ContactType[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");

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
  };


  useEffect(() => {
    getData();
  }, []);

  const displayedData = data.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3001/contacts/${id}`);
    getData();
  };

  return (
    <div className="bg-white flex flex-col gap-4 rounded shadow-lg p-4">
      <div className="flex items-center justify-between">
        <h2>Your Contact List</h2>
        <Link href={"/contact/new"}>
          <button className="p-2 rounded bg-blue-500 cursor-pointer text-white hover:bg-blue-600">
            Add Contact
          </button>
        </Link>
      </div>
      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        {displayedData.length >= 1 ? (
          displayedData.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-3 bg-white mb-3 justify-between"
            >
              <div>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
              </div>

              <div className="flex gap-5">
                <Link href={`/contact/edit/${item.id}`}>
                  <button className="bg-gray-100 p-2 rounded">Edit</button>
                </Link>

                <button
                  className="bg-gray-100 p-2 rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Data !! Create User First</h1>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
