import NavbarComponents from '@/components/navbar'
import React from 'react'
import { Inter,Linden_Hill,Poppins } from 'next/font/google'
import Maps from '@/components/maps'

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

        <div className="flex flex-row w-full mt-20">
          <div className="w-1/3 flex justify-center">
            <div className="contact-list flex flex-col justify-start items-start w-1/2">
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2 bg-yellow">
                <div className="icon flex justify-center items-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z" fill="#B6B6B6"/>
                    <path d="M13.0003 8.00024C15.1033 8.00024 16.0003 8.89724 16.0003 11.0002H18.0003C18.0003 7.77524 16.2253 6.00024 13.0003 6.00024V8.00024ZM16.4223 13.4432C16.2301 13.2686 15.9776 13.1754 15.7181 13.1835C15.4585 13.1915 15.2123 13.3001 15.0313 13.4862L12.6383 15.9472C12.0623 15.8372 10.9043 15.4762 9.71228 14.2872C8.52028 13.0942 8.15928 11.9332 8.05228 11.3612L10.5113 8.96724C10.6977 8.78637 10.8064 8.54006 10.8144 8.28045C10.8225 8.02083 10.7292 7.76828 10.5543 7.57624L6.85928 3.51324C6.68432 3.3206 6.44116 3.20374 6.18143 3.1875C5.92171 3.17125 5.66588 3.2569 5.46828 3.42624L3.29828 5.28724C3.12539 5.46075 3.0222 5.69169 3.00828 5.93624C2.99328 6.18624 2.70728 12.1082 7.29928 16.7022C11.3053 20.7072 16.3233 21.0002 17.7053 21.0002C17.9073 21.0002 18.0313 20.9942 18.0643 20.9922C18.3088 20.9786 18.5396 20.8749 18.7123 20.7012L20.5723 18.5302C20.7417 18.3328 20.8276 18.077 20.8115 17.8173C20.7954 17.5576 20.6788 17.3143 20.4863 17.1392L16.4223 13.4432Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[12px]`}>
                  +62 822 1070 1617
                </div>
              </div>
              {/* list end */}
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2">
                <div className="icon flex justify-center items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[12px]`}>
                  info@midaz.co.id
                </div>
              </div>
              {/* list end */}
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2">
                <div className="icon flex justify-center items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[12px]`}>
                  Senayan Avenue Pintu IX Jl. Asia Afrika, Gelora, Tanah Abang,Central Jakarta City, Jakarta 10270
                </div>
              </div>
              {/* list end */}
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2">
                <div className="icon flex justify-center items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 3.1543C7.19733 3.1543 3 7.35163 3 12.5293C3 17.707 7.19733 21.9043 12.375 21.9043C17.5527 21.9043 21.75 17.707 21.75 12.5293C21.75 7.35163 17.5527 3.1543 12.375 3.1543ZM13.0291 7.04093C13.0291 6.67969 12.7362 6.38686 12.375 6.38686C12.0138 6.38686 11.7209 6.67969 11.7209 7.04093L11.7209 12.0933C11.7209 12.4545 11.4281 12.7473 11.0669 12.7473H8.75872C8.39749 12.7473 8.10465 13.0402 8.10465 13.4014C8.10465 13.7626 8.39749 14.0555 8.75872 14.0555H11.0669C12.1506 14.0555 13.0291 13.1769 13.0291 12.0933L13.0291 7.04093Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[12px]`}>
                  Monday - Sunday 11:00 AM - 02:00 AM
                </div>
              </div>
              {/* list end */}
              
              
            </div>
          </div>
          <div className="w-1/3">
            <div className="form w-full flex justify-center items-center">
              <form action="" method="post" className='flex flex-col w-4/5'>
                <div className="form-grup flex flex-col w-full mb-4">
                  <label htmlFor="nama" className={`${poppins.className} text-[#B6B6B6] text-[16px]`}>Nama</label>
                  <input type="text" name="name" id="nama" className='flex w-full h-[40px] border-[1px] rounded-md border-[#2F3B4A] bg-[#0F1A29] mt-[6px]' />
                </div>
                <div className="form-grup flex flex-col w-full mb-4">
                  <label htmlFor="nama" className={`${poppins.className} text-[#B6B6B6] text-[16px]`}>Email</label>
                  <input type="email" name="email" id="email" className='flex w-full h-[40px] border-[1px] rounded-md border-[#2F3B4A] bg-[#0F1A29] mt-[6px]' />
                </div>
                <div className="form-grup flex flex-col w-full mb-4">
                  <label htmlFor="nama" className={`${poppins.className} text-[#B6B6B6] text-[16px]`}>Message</label>
                  <textarea name="message" id="note" className='flex w-full h-[40px] border-[1px] rounded-md border-[#2F3B4A] bg-[#0F1A29] mt-[6px]' />
                </div>
                <div className="form-grup flex flex-col w-full mt-2">
                  <button type='submit' className={'bg-golden rounded-md text-black h-[40px] font-medium '+poppins.className}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/3">
            <div className="maps">
              <Maps></Maps>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default ContactPage