'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../../assets/icon/Web/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export interface NavbarComponentsProps {
  brand?: string,
  text?: string
}

const NavbarComponents : React.FC<NavbarComponentsProps> =  ()=>{
  const [isMenuOpen,setMenuOpen] = useState<boolean>(false)
  const routerPathName = usePathname();

  useEffect(()=>{
    console.log(routerPathName)
  },[])

  const getActive = (path:string)=>{
    if (routerPathName.includes(path)){
      return (<div className='absolute left-[50%] translate-x-[-50%] w-[30px] h-[1px] bg-golden'></div>)
    }
  }
  return (
    <>
    <div className="h-[3.5rem]"></div>
    <div className="d-flex fixed inset-0 bg-[#0D1B37] max-h-20 z-[99]">
      <div className="z-[99] flex flex-row mx-[1rem] mt-6 lg:mx-[60px] lg:mt-[30px] md:mx-[50px] md:mt-10 justify-between items-center relative bg-[#0D1B37]">
        <div className="brand">
          {/* <Logo></Logo> */}
          <Link href={'/'}>
          <Image
            priority
            className='w-[6rem] max-sm:w-[5rem]'
            src={Logo}
            alt="Follow us on Twitter">
          </Image>
          </Link>
        </div>
        <div className="menu hidden md:hidden lg:flex">
          <div className="flex flex-row gap-14">
            <Link href="/pages/event" className='text-[14px] mx-4 text-center uppercase text-golden relative tracking-[0.2rem]'>
              Event
              {getActive('event')}
            </Link>
            <Link href="/pages/about" className='text-[14px] mx-4 text-center uppercase text-golden relative tracking-[0.2rem]'>
              About
              {getActive('about')}
            </Link>
            <Link href="/pages/gallery" className='text-[14px] mx-4 text-center uppercase text-golden relative tracking-[0.2rem]'>
              Gallery
              {getActive('gallery')}
            </Link>
            <Link href="/pages/contact" className='text-[14px] mx-4 text-center uppercase text-golden relative tracking-[0.2rem]'>
              Contact
              {getActive('contact')}
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
      <div className={`menu-mobile-list absolute left-0 right-0 bg-[rgba(0,0,0,0.5)] mt-16 h-[100vh] lg:hidden z-20 bottom-0 top-0 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-[1]' : 'opacity-0 z-[-100] h-0'}`}>
        <div className={`flex flex-col w-full bg-[#0D1B37] py-10 ${isMenuOpen ? "h-auto" : 'h-0 hidden'}`}>
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
    </>
  )
}

export default NavbarComponents;