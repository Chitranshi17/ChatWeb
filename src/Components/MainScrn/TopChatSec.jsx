import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FcVideoCall } from "react-icons/fc";
import { RiUserAddFill } from "react-icons/ri";

const TopChatSec = () => {
  return (
    <div className="w-full h-[17%] bg-white px-4 py-2">
    <span className="w-full h-[100%] flex items-center justify-between">
      <div className="w-[27%] h-[90%]  flex items-center justify-between">
        <div className="w-[30%] h-[100%] rounded-full flex item-center justify-center bg-white">
          <img
            src="https://i.pinimg.com/736x/8d/99/eb/8d99eb20adb31b62700d8935d94c682e.jpg"
            alt="noImg"
            className="rounded-full"
          />
        </div>
        <div className="w-[70%] h-[100%] flex items-center justify-start pl-4">
          <ul>
            <li className="text-slate-800 font-bold text-lg">
              User Name
            </li>
            <li className="text-emerald-500 font-semibold text-sm">
              Online
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[20%] h-[90%] flex items-center justify-between">
        <div className="w-[30%] h-[100%] border-slate-300 flex items-center justify-center">
          <button className="w-[100%] h-[90%] flex items-center justify-center ">
            <RiUserAddFill className="text-3xl font-bold text-slate-800" />
          </button>
        </div>
        <div className="w-[30%] h-[100%] border-slate-300 flex items-center justify-center">
          <button className="w-[100%] h-[90%] flex items-center justify-center">
            <FcVideoCall className="text-3xl font-bold text-slate-800" />
            {/* <MdVideoCall /> */}
          </button>
        </div>
        <div className="w-[30%] h-[100%] border-slate-300 flex items-center justify-center">
          <button className="w-[100%] h-[90%] flex items-center justify-center">
            <IoMdCall className="text-3xl font-bold text-slate-800" />
          </button>
        </div>
      </div>
    </span>
  </div>
  )
}

export default TopChatSec
