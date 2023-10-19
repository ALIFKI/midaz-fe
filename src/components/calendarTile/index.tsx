import React, { useEffect, useState } from 'react'

export interface CalendarTileProps{
  date: string;
}

const CalendarTile : React.FC<CalendarTileProps> = ({date})=>{
  const [isShowTileEvent,setShowTile] = useState(false)

  const whitelist = [23,24,25];


  const getWhiteList = ()=>{
    const dateObj = new Date(date);
    const day = dateObj.getDate(); 
    const month = dateObj.getMonth();
    const includes = whitelist.includes(day)
    if(includes && month == 9){
      setShowTile(true)
    }else{
      setShowTile(false)
    }
  }

  useEffect(()=>{
    getWhiteList()
  },[isShowTileEvent])
  return (
    isShowTileEvent ? <div className='absolute inset-0 bg-[red] left-9'>Tile</div> : (<></>)
  )
}

export default CalendarTile