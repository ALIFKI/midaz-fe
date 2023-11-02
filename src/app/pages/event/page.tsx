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
          modalContainerClass='max-sm:h-[70vh] max-sm:w-[90vw] max-sm:mt-[-15%]'
        >
          <div className='flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-white shadow-md rounded-[30px] absolute right-[-1.25rem] top-[-1.25rem] cursor-pointer' onClick={onCloseModal}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17L1 1M17 1L1 17" stroke="#01060D" strokeWidth="2"/>
            </svg>
          </div>
            <div className='flex justify-center items-center overflow-hidden'>
              <Image unoptimized src={eventImage} alt='event banner' height={100} width={200} className={`h-[100%] w-[100%] object-cover`}></Image>
            </div>
          <div className={`cursor-pointer p-2 flex min-h-[1.6rem] min-w-[6.5rem] bg-golden rounded-[40px] ${poppins.className} shadow-sm absolute bottom-[-1rem] left-[50%] translate-x-[-50%]`}>
            <span className='mx-2 text-[#353535]'>Click to RSVP</span>
          </div>
        </Modal>
        <div className="flex justify-center items-center mt-10 flex-col">
          <div className="text-golden text-[1.5rem] font-normal font-['Linden Hill'] tracking-wider max-sm:text-[1.5rem]">Upcoming Event</div>
        </div>
        <div className="flex w-full justify-center">
          <div className="lg:flex w-[45%] flex-row justify-center items-center max-sm:w-full max-sm:block px-[1rem] max-sm:mt-0">
            <Calendar
              className={`${poppins.className}`}
              tileClassName={'flex '+poppins.className}
              prev2Label={<></>}
              next2Label={<></>}
              nextLabel={<>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19L16 12L9 5" stroke="white" stroke-width="3" strokeLinecap="round" stroke-linejoin="round"/>
              </svg>
              </>}
              prevLabel={<>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="white" stroke-width="3" strokeLinecap="round" stroke-linejoin="round"/>
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