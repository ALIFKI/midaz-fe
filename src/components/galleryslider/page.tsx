'use client'
import { GalleryPageProps } from '@/app/pages/gallery/page'
import React, { FC,useEffect } from 'react'
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import Image from 'next/image';

const OwlCarousel = dynamic(()=> import('react-owl-carousel'),{ssr : false});

export interface GalleryImageSlider {

}

const GalleryImageSlider : FC<GalleryPageProps> = ({})=>{
  useEffect(() => {
    
  }, [])
  



  const responsive = [
        {
          "id": 2,
          "title": "Swiper Carousel Example",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
          "imageUrl": 'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698241337/p4gxfzzrdaarzbrxjkuj.png'
        },
        {
          "id": 1,
          "title": "Swiper Carousel Example",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
          "imageUrl": 'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698242255/ezuvqq3hbpcbmyqpf3vo.png'
        },
        {
          "id": 3,
          "title": "Swiper Carousel Example",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
          "imageUrl": 'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698241337/p4gxfzzrdaarzbrxjkuj.png'
        },
        {
          "id": 3,
          "title": "Swiper Carousel Example",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
          "imageUrl": 'https://res.cloudinary.com/dq0yefdvv/image/upload/v1698242255/jojhymnvncevfjm6ssah.png'
        }
      ];
  return (
    <div className="flex">
        <OwlCarousel
          className='gallery-carousel'
          start={2}
          responsive={{
            0 : {
              items : 2
            },
            768 : {
              items : 2
            },
            1024 : {
              items : 4,
            }
          }}
          margin={20}
          nav={true}
          >
            {responsive.map((item) => (
              <div key={item.id} className='w-full h-[43rem] flex justify-center items-center'>
                  <Image src={item.imageUrl} alt='slides image' height={300} width={500} className='w-full h-full object-cover'></Image>
              </div>
            ))}
          </OwlCarousel>
    </div>
  )
}

export default GalleryImageSlider