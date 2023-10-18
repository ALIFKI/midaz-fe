'use client'

import React from 'react'
import Logo from '../../assets/icon/Web/logo.svg'
import Image from 'next/image'


export interface NavbarComponentsProps {
  brand?: string,
  text?: string
}

const NavbarComponents : React.FC<NavbarComponentsProps> =  ()=>{
  return (
    <div className="flex flex-row lg:mx-[100px] max-lg:mt-[70px] md:mx-[80px] md:mt-10 justify-between items-center">
      <div className="brand">
        {/* <Logo></Logo> */}
        <Image
          priority
          src={Logo}
          alt="Follow us on Twitter">
        </Image>
      </div>
      <div className="menu">
        <div className="flex flex-row">
          <a href="http://" className='text-[16px] mx-4 text-center uppercase text-golden'>
            Event
          </a>
          <a href="http://" className='text-[16px] mx-4 text-center uppercase text-golden'>
            About
          </a>
          <a href="http://" className='text-[16px] mx-4 text-center uppercase text-golden'>
            Gallery
          </a>
          <a href="http://" className='text-[16px] mx-4 text-center uppercase text-golden'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponents;