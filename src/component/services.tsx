import React from 'react'
import chevlonRight from '../assets/chevlonRight.svg'
export default function Service() {
  return (
   <main className='px-24 py-12'>
    <div className='grid grid-cols-3 gap-6 [&_span]:text-xl'>
        <div className='flex gap-3 py-3 px-4 border rounded-none border-gray-500'>
            <img src={chevlonRight} 
            alt=""
            className='w-8 h-8'/>
            <span>Jobs & Careers</span>
        </div>
        <div className='flex gap-3 py-3 px-4 border rounded-none border-gray-500'>
            <img src={chevlonRight} 
            alt=""
            className='w-8 h-8'/>
            <span>Energy & Sustainability</span>
        </div>
        <div className='flex gap-3 py-3 px-4 border rounded-none border-gray-500'>
            <img src={chevlonRight} 
            alt=""
            className='w-8 h-8'/>
            <span>Diversity,Equality & Family</span>
        </div>
    </div>
    <div className='flex justify-start items-center gap-6 pt-32 pb-12 border-b-4 border-black'>
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
