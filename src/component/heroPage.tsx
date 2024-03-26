import React from 'react'
import arrowRight from '../assets/arrowRight.svg'
export default function HeroPage() {
  return (
    <main className='px-24'>
      <div className='grid grid-cols-3 gap-8 py-16 items-center'>
        <div className='grid col-start-1 col-span-2'>
          <img src="https://www.fu-berlin.de/en/_teaser-start/startseite-text-en.png?width=1000" 
          alt="Hero page Image" 
          className=''/>
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
        <div className='grid col-start-3 col-span-1 gap-6'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quam voluptas, accusamus rem deleniti eos consequuntur quos dignissimos ex in libero accusantium numquam dolor, corrupti adipisci maxime eaque repellat delectus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt mollitia unde natus accusantium vero! Nulla exercitationem culpa repudiandae voluptates eum asperiores, voluptatem sint? Illo aspernatur eum consequatur eaque molestiae!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ducimus, voluptas tenetur mollitia soluta atque veniam, accusamus est dolor quisquam, aspernatur deleniti et. Quidem delectus, debitis nulla error a ea.</p>
        </div>
      </div>
    </main>
  )
}
