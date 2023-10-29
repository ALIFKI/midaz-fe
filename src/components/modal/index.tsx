import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React from 'react'


const poppins = Poppins({
  subsets : ['latin'],weight : '300'
})

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children : React.ReactNode,
  modalContainerClass? : string
}

const Modal : React.FC<ModalProps>= ({isOpen,onClose,children,modalContainerClass})=>{
  return (
    <div className={`z-[99] fixed left-0 right-0 h-[100vh] top-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center ${isOpen ? 'flex' : 'hidden'}`}>
      <div className={`flex relative w-[23rem] h-[42rem] bg-white ${modalContainerClass}`}>
        <div className='flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-white shadow-md rounded-[30px] absolute right-[-1.25rem] top-[-1.25rem] cursor-pointer' onClick={onClose}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 17L1 1M17 1L1 17" stroke="#01060D" strokeWidth="2"/>
          </svg>
        </div>
          {children}
        <div className={`cursor-pointer p-2 flex min-h-[1.6rem] min-w-[6.5rem] bg-golden rounded-[40px] ${poppins.className} shadow-sm absolute bottom-[-1rem] left-[50%] translate-x-[-50%]`}>
          <span className='mx-2 text-[#353535]'>Click to RSVP</span>
        </div>
      </div>
    </div>
  )
}

export default Modal