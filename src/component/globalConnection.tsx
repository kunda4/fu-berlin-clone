import React from 'react'
import chevlon from '../assets/chevlonRight.svg'
export default function GlobalConnection() {
  return (
    <main className='bg-[#EEEEEE] lg:mb-12'>
      <div className='lg:grid grid-cols-3 px-2 py-6 lg:px-12 lg:py-12 gap-8 space-y-6 lg:space-y-0'>
        <div className=' flex flex-col gap-8'>
          <h1 className='font-semibold text-3xl lg:text-4xl'>Global Connections</h1>
          <p className='text-lg'>Freie Universität Berlin is one of Europe’s leading 
          research universities. Our scope is global – people from more than 150 
          countries around the world work and study at Freie Universität. Our 
          alumni actively help to shape the world today, and opportunities 
          to study and work abroad are woven into our university culture. 
          At Freie Universität Berlin, this international focus is 
          reflected in our research, teaching, and day-to-day lives. 
          It has been an integral part of our history since 1948.</p>
            <div className='flex items-center gap-4 py-3 px-4 bg-[#004659] w-fit hover:bg-[#176075]'>
        <img src={chevlon} 
        alt="chevlon Icon"
        className='w-6 h-6'/>
        <span className='text-white text-xl font-semibold'>Discover our international network</span>
      </div>
        </div>
        <div className='col-start-2 col-span-2 border-b border-gray-300'>
          <img src="https://www.fu-berlin.de/en/_inhalte-neu/intl-menschen.jpg?width=1300" alt="" />
          <div className='py-2'>
          <h6 className='lg:block hidden text-sm text-gray-600'>People from more than 150 countries around the world work and study at Freie Universität Berlin</h6>
          <h6 className='text-sm text-gray-600'>Image Credit: Bernd Wannenmacher</h6>
          </div>
        </div>
      </div>
    </main>
  )
}
