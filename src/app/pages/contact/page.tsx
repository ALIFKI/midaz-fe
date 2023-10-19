import NavbarComponents from '@/components/navbar'
import React from 'react'
import { Inter,Linden_Hill,Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets : ['latin'],weight : '300'
})


const ContactPage = ()=> {
  return (
    <div className='bg-[#0D1933] relative min-h-screen overflow-scroll w-full'>
        <NavbarComponents></NavbarComponents>
        <div className="flex justify-center items-center mt-10 flex-col">
          <div className='text-[36px] text-golden'> Bookings <span className='text-white'>&</span> Enquiries </div>
          <div className={"text-md text-white "+poppins.className}>Midaz Club & Lounge boasts a dynamic and diverse entertainment lineup that caters to all tastes.</div>
        </div>

        <div className="flex flex-row w-full">
          <div className="w-1/3">

          </div>
          <div className="w-1/3">

          </div>
          <div className="w-1/3">
            
          </div>
          
        </div>
    </div>
  )
}

export default ContactPage