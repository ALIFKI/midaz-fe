import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from '../modal';

export interface CalendarTileProps{
  date: string | Date;
  onClick : any
}

const CalendarTile : React.FC<CalendarTileProps> = ({date,onClick})=>{
  const [isShowTileEvent,setShowTile] = useState(false)
  const dateObj = new Date(date);
  const day = dateObj.getDate(); 
  const month = dateObj.getMonth();

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
    isShowTileEvent ?(
    <div className="flex w-full h-full relative">
      <div className="absolute m-2">{day}</div>
    <div className='absolute inset-0 bg-[red] left-9' onClick={onClick('https://twelvesquared.cc/wp-content/uploads/2019/06/144-web-banner-event.png')}>
      <Image src={'https://twelvesquared.cc/wp-content/uploads/2019/06/144-web-banner-event.png'} className='h-[100%] object-cover' width={500} height={500} alt='Event'></Image>
    </div>
    </div>
    ) 
    : (
      <div className="flex w-full h-full relative">
        <div className="absolute m-2">{day}</div>
      </div>
    )
  )
}

export default CalendarTile