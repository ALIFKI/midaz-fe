import './globals.css'
import type { Metadata } from 'next'
import { Inter,Linden_Hill } from 'next/font/google'
import Image from 'next/image'

const linden = Linden_Hill({
  subsets : ['latin'],weight : '400'
})

export const metadata: Metadata = {
  title: 'MIDAZ Senayan Golf',
  description: 'MIDAZ App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={linden.className}>
        <div className="">
          {children}
          <div className="z-[19] fixed flex bg-[#1B2C45] h-[3.75rem] w-[3.75rem] lg:h-[80px] lg:w-[80px] justify-center items-center rounded-[40px] max-lg:bottom-[80px] md:bottom-4 right-[10px]">
            <a href='https://wa.me/+6282210701617' target='_blank' className='max-sm:hidden'>
              <Image src={'/ic_wa.png'} width={40} height={40} alt={''} className='max-sm:h-[30px] max-sm:w-[30px]'></Image>
            </a>
            <a href='https://wa.me/+6282210701617' className='max-sm:flex lg:hidden'>
              <Image src={'/ic_wa.png'} width={40} height={40} alt={''} className='max-sm:h-[30px] max-sm:w-[30px]'></Image>
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
