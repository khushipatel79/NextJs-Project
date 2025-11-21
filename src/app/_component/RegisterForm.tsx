"use client";

import { useState } from "react";
import { registerAction } from "../actions/auth";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();
  const [serverMsg, setServerMsg] = useState<string>("");

  const handleRegister = async (formData: FormData) => {
    const result = await registerAction(formData);

     if (result?.success === false) {
      setServerMsg(result.message);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      {serverMsg && (
        <p className="mb-3 bg-red-100 text-red-700 p-2 rounded">
          {serverMsg}
        </p>
      )}

      <form action={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            className="mt-1 block w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </>
  );
}
