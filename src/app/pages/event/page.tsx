'use client'

import NavbarComponents from '@/components/navbar'
import React from 'react'
import { Inter,Linden_Hill,Poppins } from 'next/font/google'
import Maps from '@/components/maps'
import Calendar from 'react-calendar'
import CalendarTile from '@/components/calendarTile'

const poppins = Poppins({
  subsets : ['latin'],weight : '300'
})


const EventPage = ()=> {
  return (
    <div className='bg-[#0D1933] relative min-h-screen overflow-scroll w-full'>
        <NavbarComponents></NavbarComponents>
        <div className="flex justify-center items-center mt-10 flex-col">
          <div className="text-golden text-4xl font-normal font-['Linden Hill'] tracking-wider">Upcoming Event</div>
        </div>
        <div className="flex flex-row w-full mt-10 justify-center items-center">
          <Calendar
            tileClassName={'flex'}
            tileContent={({ activeStartDate, date, view })=>{
              
              return (<CalendarTile date={date}></CalendarTile>)
            }}
            ></Calendar>
        </div>
    </div>
  )
}

export default EventPage