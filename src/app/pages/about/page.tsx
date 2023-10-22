import ImageSlider from '@/components/imageslider';
import NavbarComponents from '@/components/navbar';
import { Poppins } from 'next/font/google';
import PropTypes from 'prop-types'
import React, { FC } from 'react'

const poppins = Poppins({
  subsets : ['latin'],
  weight : '400'
})
const poppins_300 = Poppins({
  subsets : ['latin'],
  weight : '300'
})

export interface AboutProps {

}

const About : FC<AboutProps> = ({}) => {
  return (
    <div className='bg-[#0D1933] relative min-h-screen overflow-scroll w-full'>
      <NavbarComponents></NavbarComponents>
      <div className="flex flex-col justify-center items-center mt-[7rem]">
        <span className={poppins.className+' text-[1.2rem] flex text-golden text-center'}>We aspire to lead the F&B lifestyle bar industry <br />by setting trends and reinventing the art of socializing. </span>

        <span className={`${poppins_300.className} text-[1rem] tracking-[0.02rem] text-center leading-[2rem] text-[#B6B6B6] mt-[2.6rem] max-w-[62rem]`}>Our commitment to unmatched ambiance, mixology, and gastronomy transforms every visit into an exceptional dining and entertainment experience. Our goal is to foster a sense of belonging, encouraging patrons to create lasting memories with friends and family. Our dedicated staff ensures impeccable service and hospitality, making each visit memorable and enriching.</span>
      </div>
      <div className='flex w-full'>
        <ImageSlider></ImageSlider>
      </div>
    </div>
  )
}

export default About;