"use client";

import { useState } from "react";
import { loginAction } from "../actions/auth";

const LoginForm = () => {
  const [serverMsg, setServerMsg] = useState("");

  const handleLogin = async (formData: FormData) => {
    const result = await loginAction(formData);

    if (result?.success === false) {
      setServerMsg(result.message); // "Invalid Password!"
    }
  };

  return (
    <>
      {serverMsg && (
        <p className="bg-red-100 text-red-700 p-2 rounded mb-3">
          {serverMsg}
        </p>
      )}

      <form action={handleLogin} className="space-y-4">
        <div>
          <label className="block font-medium">Email</label>
          <input type="email" name="email" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input type="password" name="password" className="w-full p-2 border rounded" required />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
