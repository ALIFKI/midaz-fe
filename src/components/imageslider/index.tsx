'use client'

import React, { FC } from 'react'
import { Carousel } from "react-responsive-carousel";
import { items } from "../../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import imagebar from '../../../public/image_barr.png'

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
        <Carousel
            showArrows={true}
            showIndicators={false}
            infiniteLoop={false}
            dynamicHeight={false}
            className={''}
            showStatus={false}
            centerMode={true}
          >
            {responsive.map((item) => (
              <div key={item.id} className='w-[50rem] h-[20rem] flex justify-center items-center'>
                  <Image src={imagebar} alt='slides image' height={300} width={500} className='w-[20rem]'></Image>
              </div>
            ))}
          </Carousel>
      </div>
  </>);
}


export default ImageSlider;
