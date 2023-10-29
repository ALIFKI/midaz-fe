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
        {children}
      </div>
    </div>
  )
}

export default Modal