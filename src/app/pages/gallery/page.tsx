'use client'
import GalleryImageSlider from '@/components/galleryslider/page';
import NavbarComponents from '@/components/navbar';
import { Poppins } from 'next/font/google';
import React, { FC, useState } from 'react'


export interface GalleryPageProps {

}

const poppins = Poppins({
  subsets : ['latin'],
  weight : '300'
})

const GalleryPage : FC<GalleryPageProps> = ({})=>{

  const [isActive,setIsActive] = useState<string>('photos')

  const getIsActive = (menu:string)=>{
    if(menu == isActive){
      return {
        color : 'text-golden',
        border : 'border-b-golden border-b-2'
      }
    }else{
      return {
        color : 'text-stone-400',
        border : ''
      }
    }
  }

  const setIsActiveMenu = (menu:string)=>()=>{
    setIsActive(menu);
  }

  const onClickPrev = ()=>{
    var owl = $('.owl-carousel');
    owl.trigger('prev.owl.carousel');
  }
  const onClickNext = ()=>{
    var owl = $('.owl-carousel');
    owl.trigger('next.owl.carousel');
  }
  return (
    <div className='bg-[#0D1B37] relative min-h-screen overflow-scroll w-full'>
      <NavbarComponents></NavbarComponents>

      <div className="flex w-full border-b-[#19335A] border-b-[1px] mt-[4rem]">
        <div className="flex lg:mx-[60px] md:mx-[30px] max-sm:mx-[1rem]">
          <div className="flex flex-row">
            <div className={`${getIsActive('photos').border} mr-4 cursor-pointer`} onClick={setIsActiveMenu('photos')}>
              <div className={`my-2 text-center ${getIsActive('photos').color} text-base font-normal font-['Linden Hill'] uppercase leading-[21px] tracking-widest`}>Photos</div>
            </div>
            <div className={`${getIsActive('videos').border} mx-4 cursor-pointer`} onClick={setIsActiveMenu('videos')}>
              <div className={`my-2 text-center ${getIsActive('videos').color} text-base font-normal font-['Linden Hill'] uppercase leading-[21px] tracking-widest`}>Videos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-[60px] md:mx-[30px] max-sm:mx-[1rem]">
        <div className="flex w-full justify-between items-center mt-[32px]">
          <div className="arrow cursor-pointer" onClick={onClickPrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19L5 12M5 12L12 5M5 12L19 12" stroke="#B6B6B6" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className={`w-2/3 text-center text-zinc-400 text-xl font-light leading-9 tracking-tight ${poppins.className}`}>2023 MIDAZ EVENT </div>
          <div className="arrow cursor-pointer" onClick={onClickNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19L19 12M19 12L12 5M19 12L5 12" stroke="#B6B6B6" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex mt-[1.75rem] mb-5">
        <GalleryImageSlider></GalleryImageSlider>
      </div>
    </div>
  )
}

export default GalleryPage;
