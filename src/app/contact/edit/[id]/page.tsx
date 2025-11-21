"use client";

import { ContactType } from "@/app/_types/contact";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ContactEditPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string; 
  const router = useRouter();

  const { handleSubmit, register, setValue } = useForm<ContactType>();

  const getData = async (id: string): Promise<void> => {
    const result = await axios.get<ContactType>(`http://localhost:3001/contacts/${id}`);

    setValue("name", result.data.name);
    setValue("email", result.data.email);
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const onSubmit = async (data: ContactType): Promise<void> => {
    await axios.put(`http://localhost:3001/contacts/${id}`, data);
    router.push("/contact");
  };

  return (
    <div className="bg-white rounded p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-gray-100 gap-3 p-3"
      >
        <div className="flex flex-col gap-2">
          <label className="font-bold">Name</label>
          <input
            type="text"
            placeholder="enter your name ..."
            {...register("name", { required: true })}
            className="border rounded border-gray-200 p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder="enter your email ..."
            {...register("email", { required: true })}
            className="border rounded border-gray-200 p-2"
          />
        </div>

        <button className="bg-blue-500 rounded p-2 cursor-pointer hover:bg-blue-800 text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default ContactEditPage;
