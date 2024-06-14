import React from 'react'

const ListItemsMidChat = () => {
  return (
    <li className='w-[95%] h-[17%] bg-emerald-50 font-bold border-2 rounded-tl-lg rounded-br-lg text-black flex items-center justify-start px-2 py-1 my-1'>
          <span className='w-[17%] h-[95%] bg-red-500 rounded-full flex items-center justify-center'>
            <img src="https://www.theemergingindia.com/wp-content/uploads/2023/05/anime-profile-pic-1.webp" alt="noImg" width={"90%"} height={"90%"} className='w-full h-full rounded-full'/>
          </span>
          <h4 className='pl-4 text-xl'>User 1</h4>
        </li>
  )
}

export default ListItemsMidChat
