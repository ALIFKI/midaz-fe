'use client'

import GalleryImageSlider from '@/components/galleryslider/page';
import Modal from '@/components/modal';
import NavbarComponents from '@/components/navbar';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react'

export interface GalleryDetailPageProps {

}

const poppins = Poppins({
  subsets : ['latin'],
  weight : '300'
})

const GalleryDetailPage : FC<GalleryDetailPageProps> = ({})=>{

  const [isActive,setIsActive] = useState<string>('photos');
  const [isModalOpen,setIsModalOpen] = useState<boolean>(false);
  const [imageShown,setImageShown] = useState<string>('');

  
  const onCloseModal = ()=>{
    setIsModalOpen(!isModalOpen)
  }


  const onClickImage = (image:string)=>()=>{
    setImageShown(image);
    setIsModalOpen(true);
  }
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

  const images = [
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305866/vqsu4zprzpyby9m564zn.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305865/cakbshxexpk92tjfmrtj.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305864/ifp6flw7oywsglboer2k.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305865/bdlyr3rpmpx44qrp7ro2.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305865/ngw3anpttaqqn2ao7h9f.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305864/zdjbootjw4v93sdck5xy.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305864/rhzzxfzg7hoxcseq9st3.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305863/nfwvvt92nhd0hknq7gpz.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305862/df6jgxqmbhgvy2un5zuc.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305862/isjucj1puq1eyrsfdqwb.png',
    'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698305862/x05udztraesoncndszjq.png'
  ]

  const setIsActiveMenu = (menu:string)=>()=>{
    setIsActive(menu);
  }

  return (
    <div className='bg-[#0D1B37] relative min-h-screen overflow-scroll w-full'>
      <NavbarComponents></NavbarComponents>

      <Modal isOpen={isModalOpen} modalContainerClass='h-auto max-w-[60vw] min-w-[10vw] max-h-[90vh] relative'>
        <div className='flex justify-center items-center h-[2.5rem] w-[2.5rem] bg-white shadow-md rounded-[30px] absolute right-[-1.25rem] top-[-1.25rem] cursor-pointer' onClick={onCloseModal}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 17L1 1M17 1L1 17" stroke="#01060D" strokeWidth="2"/>
          </svg>
        </div>
        <Image height={100} width={100} alt='image' src={imageShown} className='w-[100%] object-cover'></Image>
      </Modal>
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
      <div className="lg:mx-[60px] md:mx-[30px]">
        <Link href={'/pages/gallery'} className="flex w-full justify-start items-center mt-[32px] max-sm:mx-[1rem]">
          <div className="arrow cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19L5 12M5 12L12 5M5 12L19 12" stroke="#B6B6B6" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className={`ml-[0.5rem] text-zinc-400 text-xl font-light leading-9 tracking-tight max-sm:text-[1rem] ${poppins.className}`}>A Tale of 5 Glamorous Days</div>
        </Link>
      </div>
      <div className="mt-[1.75rem] w-full grid grid-gallery"
      >
        {
          images.map((image,index)=>{
            return (
              <div key={index} className={`mt-[28px] overflow-hidden cursor-pointer`} style={{gridRowEnd : `span ${index+2}`}} onClick={onClickImage(image)}>
                <Image src={image} alt='hello' height={'1000'} width={'1000'} className='h-full w-full object-cover transform hover:scale-150 transition-transform'></Image>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GalleryDetailPage;
