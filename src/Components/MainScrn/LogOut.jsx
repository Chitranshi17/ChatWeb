import React from "react";
import { MdLogout } from "react-icons/md";

const LogOut = () => {
  return (
    <div className="w-full h-[10%] bg-emerald-500 flex items-center justify-center">
      <span className="w-full flex items-center justify-between px-5">
        <h3 className="text-xl font-bold text-white">User Name</h3>
        <button className="text-3xl font-bold text-white"><MdLogout/></button>
      </span>
    </div>
  );
};

export default LogOut;
