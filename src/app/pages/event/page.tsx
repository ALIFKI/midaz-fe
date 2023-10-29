'use client'

import NavbarComponents from '@/components/navbar'
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Calendar from 'react-calendar'
import CalendarTile from '@/components/calendarTile'
import Modal from '@/components/modal'
import Image from 'next/image'

const poppins = Poppins({
  subsets : ['latin'],weight : '300'
})


const EventPage = ()=> {
  const [isModalOpen,setModalOpen] = useState(false);
  const [eventImage,setEventImage] = useState('')

  const onTilePressed = (event:string)=>()=>{
    setModalOpen(!isModalOpen)
    setEventImage(event)
  }

  const onCloseModal = ()=>{
    setModalOpen(false)
  }

  return (
    <div className='bg-[#0D1B37] relative min-h-screen overflow-scroll w-full'>
        <NavbarComponents></NavbarComponents>
        <Modal 
          isOpen={isModalOpen} 
          onClose={onCloseModal}
          modalContainerClass='max-sm:h-[80vh] max-sm:w-[90vw]'
        >
          <div className='flex justify-center items-center overflow-hidden'>
            <Image unoptimized src={eventImage} alt='event banner' height={100} width={200} className={`h-[100%] w-[100%] object-cover`}></Image>
          </div>
        </Modal>
        <div className="flex justify-center items-center mt-10 flex-col">
          <div className="text-golden text-[1.5rem] font-normal font-['Linden Hill'] tracking-wider max-sm:text-[1.5rem]">Upcoming Event</div>
        </div>
        <div className="flex w-full justify-center">
          <div className="lg:flex w-[45%] flex-row justify-center items-center max-sm:w-full max-sm:block px-[1rem] max-sm:mt-0">
            <Calendar
              tileClassName={'flex '+poppins.className}
              prev2Label={<></>}
              next2Label={<></>}
              nextLabel={<>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19L16 12L9 5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </>}
              prevLabel={<>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </>}
              tileContent={({ activeStartDate, date, view })=>{
                return (<CalendarTile date={date} onClick={onTilePressed}></CalendarTile>)
              }}
              ></Calendar>
          </div>
        </div>
    </div>
  )
}

export default EventPage