import React from 'react'
import { BsFillEmojiSmileFill, BsFillSendFill } from 'react-icons/bs'
import { RiLink } from 'react-icons/ri'

const EndChatSec = () => {
  return (
    <div className="w-full h-[15%] bg-white flex items-center justify-center">
      <div className='w-full h-[100%] flex items-center justify-center'>
        <div className='w-[70%] h-[100%] flex items-center justify-start pl-3'>
          <form action="" className=''>
          <input
            type="text"
            placeholder="Type Something Here....."
            className="text-slate-700 font-semibold text-xl p-2 w-[80%] h-[100%] bg-transparent outline-none"
          />
          </form>
        </div>
        <div className='w-[10%] h-[100]'>
        <button className="w-[100%] h-[90%] flex items-center justify-center ">
            <RiLink  className="text-2xl font-bold text-slate-800" />
          </button>
        </div>
        <div className='w-[10%] h-[100%]'>
        <button className="w-[100%] h-[90%] flex items-center justify-center ">
            <BsFillEmojiSmileFill className="text-2xl font-bold text-slate-800" />
          </button>
        </div>
        <div className='w-[10%] h-[100%]'>
        <button className="w-[100%] h-[90%] flex items-center justify-center ">
        <BsFillSendFill  className="text-2xl font-bold text-slate-800" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EndChatSec
