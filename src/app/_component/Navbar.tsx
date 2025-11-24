"use client";
import Link from "next/link"
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const NavbarPage =  () => {
    const [session, setSession] = useState(null);
    const pathname = usePathname()

    useEffect(() => {
        axios.get("/api/session")
            .then(res => {
                setSession(res.data);
            })
            .catch(err => {
                console.error("Error fetching session:", err);
            });
    }, []);

    return (
        <>
            <nav className="shadow-sm bg-gray-200">
                <div className="container mx-auto flex  items-center justify-between p-4">
                    <Link href={"/"} className="text-xl font-bold"><h1>NEXT JS</h1></Link>
                    <div className="flex gap-5 items-center">
                        {session ? (
                            <>
                                <Link href={"/contact"} className={pathname === "/contact" ? "text-blue-500" : ""}>
                                    contact
                                </Link>
                                <Link href={"/server"} className={pathname === "/server" ? "text-blue-500" : ""}>
                                    server
                                </Link>
                                <Link href={"/client"} className={pathname === "/client" ? "text-blue-500" : ""}>
                                    client
                                </Link>
                                <Link href={"/destination"} className={pathname === "/destination" ? "text-blue-500" : ""}>
                                    Destination
                                </Link>
                                <LogoutButton />
                            </>
                        ) : (
                            <>
                                <Link href={"/login"} className={pathname === "/login" ? "text-blue-500" : ""}>
                                    Login
                                </Link>
                                <Link href={"/register"} className={pathname === "/destination" ? "text-blue-500" : ""}>
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarPage
