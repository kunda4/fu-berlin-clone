import React from 'react'
import chevlonRightBlack from '../assets/chevlonRightBlack.svg'
export default function Service() {
  return (
   <main className='py-6 lg:pb-24 lg:pt-12 lg:px-16 px-2'>
    <div className='lg:grid grid-cols-3 gap-6 [&_span]:text-xl space-y-6 lg:space-y-0'>
        <div className='flex gap-3 py-3 px-4 border rounded-none border-gray-500 text-[#004659] hover:text-white hover:bg-[#004659]'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </span>
            <span>Jobs & Careers</span>
        </div>
        <div className='flex gap-3 py-3 px-4 border rounded-none border-gray-500 text-[#004659] hover:text-white hover:bg-[#004659]'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </span>
            <span>Energy & Sustainability</span>
        </div>
        <div className='flex gap-3 py-3 px-4 border rounded-none border-gray-500 text-[#004659] hover:text-white hover:bg-[#004659]'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </span>
            <span>Diversity,Equality & Family</span>
        </div>
    </div>
    <div className='flex lg:flex-row flex-col md:justify-start justify-center items-center gap-6 pt-32 pb-12 border-b-4 border-black'>
        <img src="https://www.fu-berlin.de/en/_inhalte-neu/banner/banner_familiengerechte-hochschule-rd-sw.png?width=500" 
        alt="banner family logo"
        className='w-44 h-32' />
        <img src="" alt="" />
        <img src="https://www.fu-berlin.de/en/_inhalte-neu/banner/bua-logo-banner-sw.png?width=500" 
        alt="banner family logo"
        className='w-44 h-32' />
        <img src="" alt="" />
        <img src="https://www.fu-berlin.de/en/_inhalte-neu/banner/german-u15-logo-rd-sw.png?width=500" 
        alt="banner family logo"
        className='w-44 h-8' />
        <img src="" alt="" />
        <img src="https://www.fu-berlin.de/en/_inhalte-neu/banner/systemakkreditierung-siegel-rd-sw.png?width=500" 
        alt="banner family logo"
        className='w-44 h-32' />
        <img src="" alt="" />
        <img src="https://www.fu-berlin.de/en/_inhalte-neu/banner/una-europa-logo-banner.png?width=500" 
        alt="banner family logo"
        className='w-44 h-32' />
        <img src="" alt="" />
    </div>
   </main>
  )
}
