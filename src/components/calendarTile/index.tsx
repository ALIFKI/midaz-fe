import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Modal from '../modal';
import { Poppins } from 'next/font/google';

export interface CalendarTileProps{
  date: string | Date;
  onClick : any
}

const poppins  = Poppins({
  subsets : ['latin'],
  weight : '400',
})

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
    if(includes && month == 10){
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
    <div className="flex w-full h-full relative bg-[#010E21]" onClick={onClick('https://twelvesquared.cc/wp-content/uploads/2019/06/144-web-banner-event.png')}>
      <div className="absolute inset-0 bg-[#AB8D60] opacity-[0%] hover:opacity-[40%] z-10"></div>
      <div className="absolute m-2 z-10 text-golden">
        <div className={poppins.className+" flex max-sm:bg-[#0B1D38] text-golden max-sm:rounded-[20px] max-sm:text-[12px] p-1"}>
          {day}
        </div>
      </div>
    <div className='absolute inset-0 bg-[red] left-9 max-sm:left-0 z-0'>
      <Image src={'https://twelvesquared.cc/wp-content/uploads/2019/06/144-web-banner-event.png'} className='h-[100%] object-cover' width={500} height={500} alt='Event'></Image>
    </div>
    </div>
    ) 
    : (
      <div className="flex w-full h-full relative">
        <div className={poppins.className+" absolute m-2 max-sm:text-[12px] text-white"}>{day}</div>
      </div>
    )
  )
}

export default CalendarTile