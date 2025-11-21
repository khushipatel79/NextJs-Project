import Link from "next/link"
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

const NavbarPage = async() => {
    const session =await getSession();

    return (
        <>
            <nav className="shadow-sm bg-gray-200">
                <div className="container mx-auto flex  items-center justify-between p-4">
                    <Link href={"/"} className="text-xl font-bold"><h1>NEXT JS</h1></Link>
                    <div className="flex gap-5 items-center">
                        {session ? (
                            <>
                                <Link href={"/contact"}>
                                    contact
                                </Link>
                                <Link href={"/server"}>
                                    server
                                </Link>
                                <Link href={"/client"}>
                                    client
                                </Link>
                                 <LogoutButton />
                            </>
                        ) : (
                            <>
                                <Link href={"/login"}>
                                    Login
                                </Link>
                                <Link href={"/register"}>
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
