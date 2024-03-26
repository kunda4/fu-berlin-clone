import React from 'react'
import chevlon from '../assets/chevlonRight.svg'
export default function SearchPage() {
  return (
    <main className='lg:px-16 px-2'>
      <div className='lg:grid grid-cols-3 lg:py-12 gap-8 space-y-6 lg:space-y-0'>
        <div className='flex flex-col gap-8'>
          <h1 className='font-semibold text-3xl lg:text-5xl'>Search</h1>
          <p className='text-lg'>Researchers at Freie Universität Berlin benefit from access 
          to a wide range of academic networks around the world. They produce 
          groundbreaking results and set tomorrow’s research trends through 
          interdisciplinary work with an international focus. Freie Universität 
          Berlin is among the select few German institutions of higher education 
          supported by the German federal and state governments’ Excellence Strategy.</p>
            <div className='flex items-center gap-4 py-3 px-4 bg-[#004659] w-fit hover:bg-[#176075]'>
        <img src={chevlon} 
        alt="chevlon Icon"
        className='w-6 h-6'/>
        <span className='text-white text-xl font-semibold'>Our research profile</span>
      </div>
        </div>
        <div className='col-start-2 col-span-2 border-b border-gray-300'>
          <img src="https://www.fu-berlin.de/en/_inhalte-neu/supra-fab.jpg?width=1300" alt="" />
          <div className='py-2'>
          <h6 className='lg:block hidden text-sm text-gray-600'>Nanoscale study of cell boundaries: The new SupraFAB Building on the Freie Universität Berlin campus houses research on the properties and functional mechanisms of supramolecular structures at biointerfaces.</h6>
          <h6 className='text-sm text-gray-600'>Image Credit: Bernd Wannenmacher</h6>
          </div>
        </div>
      </div>
    </main>
  )
}
