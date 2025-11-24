"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";
import { RegisterUserType } from "../_types/register-user";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
    try {
        const email = formData.get("email");
        const password = formData.get("password");

        const response = await axios.get(`${API_URL}/users?email=${email}`);
        const user = response.data[0];

        if (!user) {
            return { success: false, message: "User not found. Please register first." };
        }

        if (user.password !== password) {
            return { success: false, message: "Invalid Password!" };
        }

        await setSession({
            id: user.id,
            name: user.name,
            email: user.email,
        });

        return redirect("/");
    } catch (error) {
        if (error.message === "NEXT_REDIRECT") throw error;
        return { success: false, message: "Login failed!" };
    }
};


export const logoutAction = async () => {
    await deleteSession();
    redirect("/login")
}

export const registerAction = async (formData: FormData) => {
  try {
    const newUser: RegisterUserType = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const checkUser = await axios.get(`${API_URL}/users?email=${newUser.email}`);

    if (checkUser.data.length > 0) {
      return { success: false, message: "Email already exists!" };
    }

    const response = await axios.post(`${API_URL}/users`, newUser);
    const user: UserType = response.data;

    await setSession({ id: user.id, name: user.name, email: user.email });

    redirect("/");
    
  } catch (error: any) {
    if (error.message === "NEXT_REDIRECT") throw error;
    return { success: false, message: "Registration failed!" };
  }
};