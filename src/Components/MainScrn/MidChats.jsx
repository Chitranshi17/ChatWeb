import React from 'react'
import ListItemsMidChat from './ListItemsMidChat'

const MidChats = () => {
  return (
    <div className="w-full h-[75%] bg-white flex items-center justify-center overflow-y-scroll">
      <ul  className="w-full h-[95%] flex items-center justify-center py-2 px-2 flex-col">
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
        <ListItemsMidChat/>
      </ul>
    </div>
  )
}

export default MidChats
