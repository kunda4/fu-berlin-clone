import React from 'react'
import arrowRight from '../assets/arrowRight.svg'
import arrowReftCircle from '../assets/arrowReftCircle.svg'
import arrowRightCircle from '../assets/arrowRightCircle.svg'
import menu from '../assets/menu.svg'
import chevlon from '../assets/chevlonRight.svg'
export default function EventPage() {
  return (
    <main className='px-24 pb-12'>
      <div className='grid grid-cols-4 gap-6 py-12'>
        <div className='grid col-span-2'>
          <img src="https://www.fu-berlin.de/_campus-aktuell/_fotos-grafiken/fup-24-059-eismond.jpg?width=700" 
          alt="Bacteria beyond earth image"
          className='' />
            <div className='relative'>
            <p className=' bg-gray-100 py-3 px-3 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum iusto natus officiis assumenda, nesciunt eius ipsam numquam fugit esse exercitationem</p>
            <div className='bg-green-700 w-fit absolute right-0 bottom-0'>
              <img src={arrowRight} 
              alt="Arrow Right Icon"
              className='w-10 h-10 py-2 px-2 text-white' 
              />
            </div>
          </div>
        </div>
        <div className='col-start-3'>
          <img src="https://www.fu-berlin.de/en/featured-stories/campus/2024/mendel-cheema-lecture/mendel-cheema-stage.jpg?width=350" alt="" />
          <div className='relative'>
            <p className=' bg-gray-100 py-3 px-3 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum iusto natus officiis assumenda, nesciunt eius ipsam numquam fugit esse exercitationem
            elit. Delectus laborum iusto natus officiis assumenda, nesciunt eius ipsam numquam fugit</p>
            <div className='bg-green-700 w-fit absolute right-0 bottom-0'>
              <img src={arrowRight} 
              alt="Arrow Right Icon"
              className='w-10 h-10 py-2 px-2 text-white' 
              />
            </div>
          </div>
        </div>
        <div className='col-start-4'>
          <h1 className='font-semibold text-2xl pb-2'>Events</h1>
          <div className='flex gap-10 border-b border-gray-400 pb-4'>
            <h5 className='flex flex-col gap-2'>
              <span className=' text-gray-500 font-semibold'>Mar 26</span>
              <span className='text-gray-500'>2:00 PM</span>
              
            </h5>
            <h5 className='flex flex-col gap-2'>
            <span className='underline'>Service | Introductory</span>
              <span className='underline'>Course to Citavi</span>
            </h5>
          </div>
          <div className='flex gap-10 border-b border-gray-400 pb-4'>
            <h5 className='flex flex-col gap-1'>
              <span className=' text-gray-500 font-semibold'>Mar 26</span>
              <span className='text-gray-500'>2:00 PM</span>
              
            </h5>
            <h5 className='flex flex-col gap-1'>
            <span className='underline'>Service | Introductory</span>
              <span className='underline'>Course to Citavi</span>
            </h5>
          </div>
          <div className='flex gap-10 border-b border-gray-400 pb-4 [&_span]:text-lg'>
            <h5 className='flex flex-col gap-1'>
              <span className=' text-gray-500 font-semibold'>Mar 26</span>
              <span className='text-gray-500'>2:00 PM</span>
              
            </h5>
            <h5 className='flex flex-col gap-1'>
            <span className='underline'>Service | Introductory</span>
              <span className='underline'>Course to Citavi</span>
              <span className='underline'>officiis assumenda</span>
              <span className='underline'>Course to Citavi</span>
            </h5>
          </div>
          <div className='flex gap-4 py-6'>
            <img src={menu} 
            alt="menu Icon"
            className='w-8 h-8 border rounded-full' />
            <img src={arrowReftCircle} 
            alt="Arrow Reft Circle Icon"
            className='w-8 h-8' />
            <span className=' text-gray-500'>1/18</span>
            <img src={arrowRightCircle} 
            alt="Arrow Right Circle Icon" 
            className='w-8 h-8'/>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4 py-3 px-4 bg-green-900 w-fit'>
        <img src={chevlon} 
        alt="chevlon Icon"
        className='w-6 h-6'/>
        <span className='text-white text-xl'>Newsroom: The latest News from Delectus laborum laborum </span>
      </div>
    </main>
  )
}
