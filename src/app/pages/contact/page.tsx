import NavbarComponents from '@/components/navbar'
import React from 'react'
import { Inter,Linden_Hill,Poppins } from 'next/font/google'
import Maps from '@/components/maps'

const poppins = Poppins({
  subsets : ['latin'],weight : '300'
})


const ContactPage = ()=> {
  return (
    <div className='bg-[#0D1B37] relative min-h-screen overflow-scroll w-full'>
        <NavbarComponents></NavbarComponents>
        <div className="flex justify-center items-center mt-10 flex-col max-sm:mx-8">
          <div className='text-[2rem] text-golden max-sm:text-[1.5rem]'> Bookings <span className='text-white'>&</span> Enquiries </div>
          <div className={"lg:text-md lg:text-white max-sm:text-center max-sm:text-[1rem] max-sm:text-[#B6B6B6] "+poppins.className}>Midaz Club & Lounge boasts a dynamic and diverse entertainment lineup that caters to all tastes.</div>
        </div>

        <div className="flex flex-row w-full mt-20 max-sm:mt-10 max-sm:flex-col max-sm:items-center">
          <div className="w-1/3 flex justify-center max-sm:w-full max-sm:items-center">
            <div className="contact-list flex flex-col justify-between items-start w-[60%] max-sm:items-center">
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2 bg-yellow max-sm:flex-col">
                <div className="icon flex justify-center items-center mr-4 max-sm:m-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z" fill="#B6B6B6"/>
                    <path d="M13.0003 8.00024C15.1033 8.00024 16.0003 8.89724 16.0003 11.0002H18.0003C18.0003 7.77524 16.2253 6.00024 13.0003 6.00024V8.00024ZM16.4223 13.4432C16.2301 13.2686 15.9776 13.1754 15.7181 13.1835C15.4585 13.1915 15.2123 13.3001 15.0313 13.4862L12.6383 15.9472C12.0623 15.8372 10.9043 15.4762 9.71228 14.2872C8.52028 13.0942 8.15928 11.9332 8.05228 11.3612L10.5113 8.96724C10.6977 8.78637 10.8064 8.54006 10.8144 8.28045C10.8225 8.02083 10.7292 7.76828 10.5543 7.57624L6.85928 3.51324C6.68432 3.3206 6.44116 3.20374 6.18143 3.1875C5.92171 3.17125 5.66588 3.2569 5.46828 3.42624L3.29828 5.28724C3.12539 5.46075 3.0222 5.69169 3.00828 5.93624C2.99328 6.18624 2.70728 12.1082 7.29928 16.7022C11.3053 20.7072 16.3233 21.0002 17.7053 21.0002C17.9073 21.0002 18.0313 20.9942 18.0643 20.9922C18.3088 20.9786 18.5396 20.8749 18.7123 20.7012L20.5723 18.5302C20.7417 18.3328 20.8276 18.077 20.8115 17.8173C20.7954 17.5576 20.6788 17.3143 20.4863 17.1392L16.4223 13.4432Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[#B6B6B6] text-[16px] max-sm:text-center`}>
                  +62 822 1070 1617
                </div>
              </div>
              {/* list end */}
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2 max-sm:flex-col">
                <div className="icon flex justify-center items-center mr-4 max-sm:m-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[#B6B6B6] text-[16px] max-sm:text-center`}>
                  info@midaz.co.id
                </div>
              </div>
              {/* list end */}
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2 max-sm:flex-col">
                <div className="icon flex justify-center items-center mr-4 max-sm:m-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[#B6B6B6] text-[16px] max-sm:text-center`}>
                  Senayan Avenue Pintu IX Jl. Asia Afrika, Gelora, Tanah Abang,Central Jakarta City, Jakarta 10270
                </div>
              </div>
              {/* list end */}
              {/* list start */}
              <div className="flex flex-row justify-center items-center max-lg:my-4 md:my-2 max-sm:flex-col">
                <div className="icon flex justify-center items-center mr-4 max-sm:m-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 3.1543C7.19733 3.1543 3 7.35163 3 12.5293C3 17.707 7.19733 21.9043 12.375 21.9043C17.5527 21.9043 21.75 17.707 21.75 12.5293C21.75 7.35163 17.5527 3.1543 12.375 3.1543ZM13.0291 7.04093C13.0291 6.67969 12.7362 6.38686 12.375 6.38686C12.0138 6.38686 11.7209 6.67969 11.7209 7.04093L11.7209 12.0933C11.7209 12.4545 11.4281 12.7473 11.0669 12.7473H8.75872C8.39749 12.7473 8.10465 13.0402 8.10465 13.4014C8.10465 13.7626 8.39749 14.0555 8.75872 14.0555H11.0669C12.1506 14.0555 13.0291 13.1769 13.0291 12.0933L13.0291 7.04093Z" fill="#B6B6B6"/>
                  </svg>
                </div>
                <div className={`${poppins.className} text-[#B6B6B6] text-[16px] max-sm:text-center`}>
                  Monday - Sunday 11:00 AM - 02:00 AM
                </div>
              </div>
              {/* list end */}
              {/* list start */}
              <div className="flex flex-row-reverse justify-center items-center max-lg:my-4 md:my-2 max-sm:flex-col">
                <div className="icon flex justify-center items-center ml-4 max-sm:m-0">
                  <a href=" https://instagram.com/midazsenayan?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15" cy="15" r="15" fill="#B6B6B6"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.408 7.045C13.2077 7.00818 13.4627 7 15.5 7C17.5373 7 17.7923 7.00886 18.5914 7.045C19.3905 7.08114 19.9359 7.20864 20.4132 7.39341C20.913 7.58227 21.3664 7.8775 21.7414 8.25932C22.1232 8.63364 22.4177 9.08636 22.6059 9.58682C22.7914 10.0641 22.9182 10.6095 22.955 11.4073C22.9918 12.2084 23 12.4634 23 14.5C23 16.5373 22.9911 16.7923 22.955 17.592C22.9189 18.3898 22.7914 18.9352 22.6059 19.4125C22.4177 19.913 22.1227 20.3665 21.7414 20.7414C21.3664 21.1232 20.913 21.4177 20.4132 21.6059C19.9359 21.7914 19.3905 21.9182 18.5927 21.955C17.7923 21.9918 17.5373 22 15.5 22C13.4627 22 13.2077 21.9911 12.408 21.955C11.6102 21.9189 11.0648 21.7914 10.5875 21.6059C10.087 21.4177 9.63351 21.1227 9.25864 20.7414C8.87708 20.3668 8.58181 19.9136 8.39341 19.4132C8.20864 18.9359 8.08182 18.3905 8.045 17.5927C8.00818 16.7916 8 16.5366 8 14.5C8 12.4627 8.00886 12.2077 8.045 11.4086C8.08114 10.6095 8.20864 10.0641 8.39341 9.58682C8.58208 9.08642 8.87758 8.63317 9.25932 8.25864C9.63366 7.87716 10.0867 7.58189 10.5868 7.39341C11.0641 7.20864 11.6095 7.08182 12.4073 7.045H12.408ZM18.5307 8.395C17.7398 8.35886 17.5025 8.35136 15.5 8.35136C13.4975 8.35136 13.2602 8.35886 12.4693 8.395C11.7377 8.42841 11.3409 8.55045 11.0764 8.65341C10.7266 8.78977 10.4764 8.95136 10.2139 9.21386C9.96503 9.45594 9.77353 9.75065 9.65341 10.0764C9.55045 10.3409 9.42841 10.7377 9.395 11.4693C9.35886 12.2602 9.35136 12.4975 9.35136 14.5C9.35136 16.5025 9.35886 16.7398 9.395 17.5307C9.42841 18.2623 9.55045 18.6591 9.65341 18.9236C9.77341 19.2489 9.965 19.5441 10.2139 19.7861C10.4559 20.035 10.7511 20.2266 11.0764 20.3466C11.3409 20.4495 11.7377 20.5716 12.4693 20.605C13.2602 20.6411 13.4968 20.6486 15.5 20.6486C17.5032 20.6486 17.7398 20.6411 18.5307 20.605C19.2623 20.5716 19.6591 20.4495 19.9236 20.3466C20.2734 20.2102 20.5236 20.0486 20.7861 19.7861C21.035 19.5441 21.2266 19.2489 21.3466 18.9236C21.4495 18.6591 21.5716 18.2623 21.605 17.5307C21.6411 16.7398 21.6486 16.5025 21.6486 14.5C21.6486 12.4975 21.6411 12.2602 21.605 11.4693C21.5716 10.7377 21.4495 10.3409 21.3466 10.0764C21.2102 9.72659 21.0486 9.47636 20.7861 9.21386C20.544 8.96505 20.2493 8.77355 19.9236 8.65341C19.6591 8.55045 19.2623 8.42841 18.5307 8.395ZM14.542 16.812C15.077 17.0347 15.6728 17.0648 16.2275 16.8971C16.7821 16.7294 17.2614 16.3743 17.5834 15.8924C17.9053 15.4106 18.05 14.832 17.9928 14.2553C17.9355 13.6786 17.6798 13.1398 17.2693 12.7307C17.0077 12.4692 16.6913 12.269 16.343 12.1444C15.9946 12.0199 15.623 11.9741 15.2549 12.0104C14.8867 12.0467 14.5312 12.1642 14.214 12.3544C13.8967 12.5446 13.6255 12.8028 13.42 13.1104C13.2145 13.4179 13.0797 13.7672 13.0254 14.1332C12.971 14.4991 12.9985 14.8725 13.1058 15.2265C13.2131 15.5805 13.3976 15.9063 13.6459 16.1805C13.8943 16.4547 14.2003 16.6704 14.542 16.812ZM12.7741 11.7741C13.1321 11.4161 13.557 11.1322 14.0247 10.9384C14.4925 10.7447 14.9938 10.645 15.5 10.645C16.0062 10.645 16.5075 10.7447 16.9753 10.9384C17.443 11.1322 17.8679 11.4161 18.2259 11.7741C18.5839 12.1321 18.8678 12.557 19.0616 13.0247C19.2553 13.4925 19.355 13.9938 19.355 14.5C19.355 15.0062 19.2553 15.5075 19.0616 15.9753C18.8678 16.443 18.5839 16.8679 18.2259 17.2259C17.503 17.9489 16.5224 18.355 15.5 18.355C14.4776 18.355 13.497 17.9489 12.7741 17.2259C12.0511 16.503 11.645 15.5224 11.645 14.5C11.645 13.4776 12.0511 12.497 12.7741 11.7741ZM20.21 11.2191C20.2987 11.1354 20.3697 11.0348 20.4188 10.9232C20.468 10.8115 20.4942 10.6912 20.496 10.5693C20.4977 10.4473 20.475 10.3263 20.4292 10.2133C20.3833 10.1003 20.3153 9.99762 20.2291 9.91139C20.1428 9.82516 20.0402 9.75711 19.9272 9.71126C19.8142 9.66542 19.6931 9.64271 19.5712 9.64449C19.4492 9.64627 19.3289 9.67249 19.2173 9.72161C19.1057 9.77073 19.005 9.84175 18.9214 9.93045C18.7586 10.103 18.6695 10.3321 18.673 10.5693C18.6764 10.8064 18.7722 11.0329 18.9399 11.2006C19.1076 11.3683 19.334 11.464 19.5712 11.4675C19.8083 11.4709 20.0375 11.3818 20.21 11.2191Z" fill="#383838"/>
                    </svg>
                  </a>
                </div>
                <div className={`${poppins.className} text-[#B6B6B6] text-[16px] max-sm:text-center`}>
                  Social media
                </div>
              </div>
              {/* list end */}
              
              
            </div>
          </div>
          {/* Maps */}
          <div className="w-1/3 max-sm:w-full lg:hidden md:hidden px-10 mb-10">
            <div className="text-sm w-full text-center mb-3 mt-[3.75rem]">
              <span className={`${poppins.className} text-golden`}>Map Location</span>
            </div>
            <div className="maps">
              <Maps></Maps>
            </div>
          </div>
          <div className="w-1/3 max-sm:w-full max-sm:mb-10">
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
                  <textarea name="message" id="note" className='flex w-full border-[1px] rounded-md border-[#2F3B4A] bg-[#0F1A29] mt-[6px]' rows={4}/>
                </div>
                <div className="form-grup flex flex-col w-full mt-2">
                  <button type='submit' className={'bg-golden rounded-md text-black h-[40px] font-medium '+poppins.className}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/3 max-sm:hidden">
            <div className="maps">
              <Maps></Maps>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default ContactPage