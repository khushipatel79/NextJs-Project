"use client";

import { logoutAction } from "../actions/auth";

const LogoutButton = () => {

  const handleLogOut = async() =>{
    await logoutAction();
  }

  return (
    <div>
      <button className="bg-blue-500 p-3 rounded text-white hover:bg-blue-800 point cursor-pointer" onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default LogoutButton
