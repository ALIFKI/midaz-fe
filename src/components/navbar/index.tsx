'use client'

import React, { useState } from 'react'
import Logo from '../../assets/icon/Web/logo.svg'
import Image from 'next/image'
import Link from 'next/link'


export interface NavbarComponentsProps {
  brand?: string,
  text?: string
}

const NavbarComponents : React.FC<NavbarComponentsProps> =  ()=>{
  const [isMenuOpen,setMenuOpen] = useState<boolean>(false)
  return (
    <div className="">
      <div className="z-[99] flex flex-row mx-[1rem] mt-6 lg:mx-[100px] lg:mt-[70px] md:mx-[80px] md:mt-10 justify-between items-center relative bg-[#0D1B37]">
        <div className="brand">
          {/* <Logo></Logo> */}
          <Link href={'/'}>
          <Image
            priority
            className='max-sm:w-[5rem]'
            src={Logo}
            alt="Follow us on Twitter">
          </Image>
          </Link>
        </div>
        <div className="menu hidden md:hidden lg:flex">
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
        <div className="burger-mobile lg:hidden cursor-pointer" onClick={()=>{setMenuOpen(!isMenuOpen)}}>
          {
            isMenuOpen? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20L4 4M20 4L4 20" stroke="#D2B680"/>
              </svg>
            ):(
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="1.05" fill="#DAB77A"/>
                <rect x="2" y="11.2725" width="20" height="1.05" fill="#DAB77A"/>
                <rect x="2" y="18.5459" width="20" height="1.05" fill="#DAB77A"/>
              </svg>
            )
          }
        </div>
      </div>
      <div className={`menu-mobile-list absolute left-0 right-0 bg-[rgba(0,0,0,0.5)] mt-16 lg:hidden z-20 bottom-0 top-0 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-[1]' : 'opacity-0 hidden'}`}>
        <div className="flex flex-col w-full bg-[#0D1B37] py-10">
          <Link href="/" className='text-[0.875rem] mx-4 text-left uppercase text-golden py-[1rem] border-b border-[#173159]'>
            Home
          </Link>
          <Link href="/pages/event" className='text-[0.875rem] mx-4 text-left uppercase text-golden py-[1rem] border-b border-[#173159]'>
            Event
          </Link>
          <Link href="/pages/about" className='text-[0.875rem] mx-4 text-left uppercase text-golden py-[1rem] border-b border-[#173159]'>
            About
          </Link>
          <Link href="/pages/gallery" className='text-[0.875rem] mx-4 text-left uppercase text-golden py-[1rem] border-b border-[#173159]'>
            Gallery
          </Link>
          <Link href="/pages/contact" className='text-[0.875rem] mx-4 text-left uppercase text-golden py-[1rem] border-b border-[#173159]'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponents;