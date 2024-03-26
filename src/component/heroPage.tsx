import React from 'react'
import arrowRight from '../assets/arrowRight.svg'
export default function HeroPage() {
  return (
    <main className='px-2 lg:px-24'>
      <div className='lg:grid grid-cols-3 gap-8 lg:py-16 py-8 items-center'>
        <div className='grid col-start-1 col-span-2 relative overflow-hidden group'>
          <img src="https://www.fu-berlin.de/en/_teaser-start/startseite-text-en.png?width=1000" 
          alt="Hero page Image" 
          className='w-full h-full object-cover transition-transform duration-300 transform-gpu group-hover:scale-110'/>
          <div className='relative'>
            <p className=' bg-gray-100 py-3 px-3 text-xl group-hover:bg-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus laborum iusto natus officiis assumenda, nesciunt eius ipsam numquam fugit esse exercitationem</p>
            <div className='bg-[#176075] w-fit absolute right-0 bottom-0 group-hover:bg-[#004659]'>
              <img src={arrowRight} 
              alt="Arrow Right Icon"
              className='w-10 h-10 py-2 px-2 text-white' 
              />
            </div>
          </div>
        </div>
        <div className='grid col-start-3 col-span-1 gap-6 md:py-0 py-12'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quam voluptas, accusamus rem deleniti eos consequuntur quos dignissimos ex in libero accusantium numquam dolor, corrupti adipisci maxime eaque repellat delectus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt mollitia unde natus accusantium vero! Nulla exercitationem culpa repudiandae voluptates eum asperiores, voluptatem sint? Illo aspernatur eum consequatur eaque molestiae!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ducimus, voluptas tenetur mollitia soluta atque veniam, accusamus est dolor quisquam, aspernatur deleniti et. Quidem delectus, debitis nulla error a ea.</p>
        </div>
      </div>
    </main>
  )
}
