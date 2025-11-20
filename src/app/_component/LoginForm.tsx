"use client";

import { loginAction } from "../actions/auth";

const LoginForm = () => {
    return (
        <>
            <form action={loginAction} className="space-x-4 flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" placeholder="Enter your email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent bg-blue-500 text-white rounded hover:bg-blue-800">Login</button>
            </form>
        </>
    )
}

export default LoginForm
