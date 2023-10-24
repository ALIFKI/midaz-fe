'use client'

import React from 'react'
import Logo from '../../assets/icon/Web/logo.svg'
import Image from 'next/image'
import Link from 'next/link'


export interface NavbarComponentsProps {
  brand?: string,
  text?: string
}

const NavbarComponents : React.FC<NavbarComponentsProps> =  ()=>{
  return (
    <div className="z-[99] flex flex-row lg:mx-[100px] max-lg:mt-[70px] md:mx-[80px] md:mt-10 justify-between items-center relative">
      <div className="brand">
        {/* <Logo></Logo> */}
        <Link href={'/'}>
        <Image
          priority
          src={Logo}
          alt="Follow us on Twitter">
        </Image>
        </Link>
      </div>
      <div className="menu">
        <div className="flex flex-row gap-20">
          <Link href="/pages/event" className='text-[16px] mx-4 text-center uppercase text-golden'>
            Event
          </Link>
          <Link href="/pages/about" className='text-[16px] mx-4 text-center uppercase text-golden'>
            About
          </Link>
          <Link href="/pages/gallery" className='text-[16px] mx-4 text-center uppercase text-golden'>
            Gallery
          </Link>
          <Link href="/pages/contact" className='text-[16px] mx-4 text-center uppercase text-golden'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponents;