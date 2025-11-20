"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
    console.log("formData" , formData);
    
    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);
        const user: UserType = response.data[0];
        if (!user) throw new Error("Invalid Credentials")

        await setSession({name:user.name , email: user.email , id : user.id})
        return redirect("/")
    } catch (error) {
        if(error.message === "NEXT_REDIRECT") throw error;
        return {success : false , message:"error while login"}
    }
}

export const logoutAction = async () => {
        await deleteSession();
        redirect("/login")
}