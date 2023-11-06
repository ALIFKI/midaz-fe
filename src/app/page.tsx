'use client'
import { ReactElement, useEffect, useRef, useState } from 'react'
import NavbarComponents from '@/components/navbar'
import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'
import lottieJSON from '../assets/icon/Web/midaz scroll.json'
import Link from 'next/link'

export default function Home() {
  const [isVideoPlay,setVideoPlay] = useState(0);
  const [animatedClass,setAnimatedClass] = useState('opacity-0 bottom-[17%]')
  const [animatedClassMobile,setAnimatedClassMobile] = useState('opacity-0 bottom-[17%]')
  const [styleSwipe,setStyleSwipe] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (isVideoPlay == 1) {
        console.log('video is playing');
      }else{
        console.log(isVideoPlay,'yes')
        setTimeout(() => {
          setAnimatedClass('opacity-1 bottom-[23%]')
          setAnimatedClassMobile('opacity-1 bottom-[-3%]')
        }, 35000);
        setVideoPlay(1);
        playVideo();
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll',listenScrollToBottom)

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('scroll',listenScrollToBottom)
    };
  }, [isVideoPlay]);

  const listenScrollToBottom = ()=>{
    if (isScrolledToBottom()) {
        console.log('You have reached the bottom of the page!');
        setStyleSwipe('bottom-[-10%]')
    }else{
      setStyleSwipe('')
    }
  }

  const isScrolledToBottom = ()=>{
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;

    return windowHeight + scrollY >= documentHeight;
}


  const playVideo = () => {
    console.log('trigger play')
    setVideoPlay(isVideoPlay+1);
    const video = document.querySelector('#v0') as HTMLVideoElement;
    const video1 = document.querySelector('#v1') as HTMLVideoElement;
    console.log(video)
    try {
      if (video) {
        video.play();
      }
      if (video1) {
        video1.play();
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='bg-[#0E1B37] relative min-h-screen overflow-scroll w-full'>
        <NavbarComponents></NavbarComponents>
        <div className="hidden md:hidden lg:flex flex-col z-1 w-full section-2 justify-center items-center h-[95vh] relative">
          <div className=" relative w-full bg-[#0E1B37] overflow-hidden md:h-[90vh] flex justify-center items-center">
            <div className="absolute bg-red inset-0 z-10"></div>
            <video muted={true} playsInline={true} id="v0" tabIndex={0} preload="preload" className='h-[100%] flex justify-center items-center z-0 relative' controls={false}>
              <source type="video/mp4" src={"/midaz_video_desktop.mov"}></source>
            </video>
            <span className={`max-sm:hidden absolute translate-x-[-50%] z-20 left-[50%] transition-all ${animatedClass} ${isVideoPlay} text-white`}>For reservations, please reach us via <Link className='text-golden' href="/pages/contact" as={'/pages/contact'} style={{transitionDuration : '1s'}}>Contact Page</Link></span>
          </div>
          <div className={`flex justify-center items-center flex-col ml-[30px] fixed bottom-0 transition-all ${styleSwipe}`}>
            <span className='text-golden text-[14px]'>SWIPE TO PLAY VIDEO</span>
            <Player className='h-[34px]' src={lottieJSON} autoplay loop ></Player>
          </div>
          {/* <div className="fixed flex bg-[#1B2C45] h-[3.75rem] w-[3.75rem] lg:h-[80px] lg:w-[80px] justify-center items-center rounded-[40px] max-lg:bottom-[80px] md:bottom-4 right-[10px]">
            <Image src={'/ic_wa.png'} width={40} height={40} alt={''} className='max-sm:h-[30px] max-sm:w-[30px]'></Image>
          </div> */}
        </div>
        {/* mobile video */}
        <div className="lg:hidden flex h-[100vh] w-full justify-center items-center relative">
          <div className="flex h-[50vh] relative justify-center items-center flex-col mt-10 w-full">
            <video muted={true} playsInline={true} id="v1" tabIndex={0} preload="auto" className='w-full flex justify-center items-center z-0 relative' controls={false}>
              <source type='video/mp4' src={'/midaz_video_mobile.mp4'}></source>
            </video>
            <span className={`flex flex-col lg:hidden absolute translate-x-[-50%] text-[1rem] z-20 left-[50%] transition-all w-[90%] text-center ${animatedClassMobile} ${isVideoPlay}`}>For reservations, please reach us via <Link className='text-golden' href="/pages/contact" as={'/pages/contact'} style={{transitionDuration : '1s'}}>Contact Page</Link></span>
            <div className="flex justify-center items-center flex-col fixed left-[50%] translate-x-[-50%] bottom-[1%]">
              <span className='text-golden text-[0.75rem]'>SWIPE TO PLAY VIDEO</span>
              <Player className='h-[30px]' src={lottieJSON} autoplay loop ></Player>
            </div>
          </div>
          <div className="fixed flex bg-[#1B2C45] h-[3.75rem] w-[3.75rem] lg:h-[80px] lg:w-[80px] justify-center items-center rounded-[40px] max-lg:bottom-[80px] md:bottom-4 right-[10px]">
            <Image src={'/ic_wa.png'} width={40} height={40} alt={''} className='max-sm:h-[30px] max-sm:w-[30px]'></Image>
          </div>
        </div>
    </div>
  )
}
