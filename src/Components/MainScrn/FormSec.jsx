import React from "react";
import { IoNotifications, IoSearch } from "react-icons/io5";

const FormSec = () => {
  return (
    <div className="w-full h-[15%] bg-emerald-500	flex items-center justify-between px-5">
      <form
        action="#"
        className="w-[100%] h-full flex items-center justify-center"
      >
        <span className="w-[90%] h-[50%] flex items-center justify-start border-b-2 border-slate-100 ">
          <button className="text-white text-sm  p-2 w-[15%] h-[100%] flex items-center justify-center">
            <IoSearch className="text-3xl font-bold text-white text-center"/>
          </button>

          <input
            type="text"
            placeholder="Search"
            className="text-white font-semibold text-xl p-2 w-[80%] h-[100%] bg-transparent outline-none"
          />
          {/* <button className="text-white text-sm text-center bg-slate-400 p-2 w-[10%] h-[50%]">Icon</button> */}
        </span>
      </form>
      <div className="w-[17%] h-[60%] flex items-center justify-center rounded-full ">
        <button className="text-semibold text-white text-sm flex items-center justify-center border-1 w-full h-[100%]"><IoNotifications className="text-3xl text-white font-bold"/></button>
      </div>
    </div>
  );
};


export default FormSec;
