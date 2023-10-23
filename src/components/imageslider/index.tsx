'use client'

import React, { FC } from 'react'
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import imagebar from '../../../public/image_barr.png'
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(()=> import('react-owl-carousel'),{ssr : false});

export interface ImageSliderProps {

}
const ImageSlider: FC<ImageSliderProps> = ({})=>{
  const responsive = [
          {
            "id": 1,
            "title": "Swiper Carousel Example",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            "imageUrl": imagebar
          },
          {
            "id": 2,
            "title": "Swiper Carousel Example",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            "imageUrl": imagebar
          },
          {
            "id": 3,
            "title": "Swiper Carousel Example",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            "imageUrl": imagebar
          }
        ];
  return (<>
      <div className="w-full">
          <OwlCarousel
          center
          loop
          start={2}
          responsive={{
            0 : {
              items : 2
            },
            768 : {
              items : 2
            },
            1024 : {
              items : 2,
            }
          }}
          margin={40}
          nav={true}
          navContainerClass='nav-owl-class'
          navText={[`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9997 31.667L8.33301 20.0003M8.33301 20.0003L19.9997 8.33366M8.33301 20.0003L31.6663 20.0003" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0003 31.667L31.667 20.0003M31.667 20.0003L20.0003 8.33366M31.667 20.0003L8.33366 20.0003" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`]}
          >
            {responsive.map((item) => (
              <div key={item.id} className='w-[100%] flex justify-center items-center'>
                  <Image src={imagebar} alt='slides image' height={300} width={500} className='w-[0]'></Image>
              </div>
            ))}
          </OwlCarousel>
      </div>
  </>);
}


export default ImageSlider;
