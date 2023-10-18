'use client'
import gsap from 'gsap'
import { ReactElement, useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavbarComponents from '@/components/navbar'
import WhatsappIcon from '../assets/icon/Web/ic_wa.svg'
import Image from 'next/image'


gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const comp = useRef(null); // create a ref for the root level element (for scoping)
  const circle = useRef(null);
  const [scroll,setScrol] = useState(0);
  const [isVideoPlay,setVideoPlay] = useState(0);
  const [animatedClass,setAnimatedClass] = useState('opacity-0 bottom-[17%]')
  // const configLenis = ()=>{
  //   const lenis = new Lenis()

  //   lenis.on('scroll', (e) => {
  //   })

  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }

  // const GsapConfig = ()=>{
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger : '.section-2',
  //       start: 'top bottom',
  //       end : 'bottom center',
  //       scrub : true,
  //       markers: true
  //     }
  //   })

  //   const tl2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger : '.section-1',
  //       start: '20%',
  //       end : 'bottom center',
  //       scrub : true,
  //       markers: true
  //     }
  //   })

  //   tl.fromTo('.midaz-logo-2',{
  //     opacity: 0,
  //   },{
  //     opacity : 1
  //   })
  //   tl2.to('.midaz-logo',{
  //     rotate : 180,
  //     opacity : 0,
  //   })
  // }


  useEffect(() => {
    const handleScroll = () => {
      if (isVideoPlay == 1) {
        console.log('video is playing');
      }else{
        console.log(isVideoPlay,'yes')
        setTimeout(() => {
          setAnimatedClass('opacity-1 bottom-[20%]')
        }, 35000);
        setVideoPlay(1);
        playVideo();
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVideoPlay]);


  const playVideo = () => {
    console.log('trigger play')
    setVideoPlay(isVideoPlay+1);
    const video = document.querySelector('video');
    try {
      if (video) {
        video.play();
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='bg-[#0E1B37] relative min-h-screen overflow-scroll w-full'>
        <NavbarComponents></NavbarComponents>
        <div className="flex flex-column z-1 relative w-full section-2 justify-center items-center">
          <div className="relative w-full justify-center items-center flex flex-row bg-[#0E1B37] overflow-hidden md:h-[95vh]">
            <video muted={true} id="v0" tabIndex={0} preload="preload" className='w-[100%]'>
              <source type="video/mp4" src={"https://res.cloudinary.com/dq0yefdvv/video/upload/v1697633480/x0equ2ndoixujm5rqnhg.mp4"}></source>
            </video>

            <span className={`absolute translate-x-[-50%] left-[50%] transition-all ${animatedClass} ${isVideoPlay}`}>For reservations, please reach us via <a className='text-golden' href="" style={{transitionDuration : '1s'}}>Contact Page</a></span>
          </div>
        </div>
        <div className="fixed flex bg-[#1B2C45] h-[80px] w-[80px] justify-center items-center rounded-[40px] max-lg:bottom-[80px] md:bottom-4 right-[10px]">
          <Image src={'/../../ic_wa.png'} width={40} height={40} alt={''}></Image>
        </div>
    </div>
  )
}
