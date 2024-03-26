import React from 'react'
import chevlon from '../assets/chevlonRight.svg'
export default function SearchPage() {
  return (
    <main>
      <div className='lg:grid grid-cols-3 px-2 py-6 lg:px-24 lg:py-12 gap-8 space-y-6 lg:space-y-0'>
        <div className='flex flex-col gap-8'>
          <h1 className='font-semibold text-5xl'>Search</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Obcaecati deserunt cum incidunt dolorum saepe, accusamus 
            aliquam! Quas, officiis? Dolor recusandae totam rerum vel 
            officiis molestias excepturi numquam repudiandae voluptatem eveniet!
            officiis? Dolor recusandae totam rerum vel 
            officiis molestias excepturi numquam repudiandae voluptatem eveniet!</p>
            <div className='flex items-center gap-4 py-3 px-4 bg-[#004659] w-fit hover:bg-[#176075]'>
        <img src={chevlon} 
        alt="chevlon Icon"
        className='w-6 h-6'/>
        <span className='text-white text-xl'>To our degree program</span>
      </div>
        </div>
        <div className='col-start-2 col-span-2 border-b border-gray-300'>
          <img src="https://www.fu-berlin.de/en/_inhalte-neu/supra-fab.jpg?width=1300" alt="" />
          <div className='py-2'>
          <h6 className='lg:block hidden text-sm text-gray-600'>Student of the campus of numquam repudiandae</h6>
          <h6 className='text-sm text-gray-600'>Image Credit: Agnes Iradukunda</h6>
          </div>
        </div>
      </div>
    </main>
  )
}
