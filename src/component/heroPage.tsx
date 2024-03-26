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
            <p className=' bg-gray-100 py-3 px-3 text-xl group-hover:bg-[#CCCCCC]'>Measures Taken against Antisemitism, Racism, and Discrimination: Counseling and Advice Services, Events, University Communication Regarding the Conflict in the Middle East</p>
            <div className='bg-[#176075] w-fit absolute right-0 bottom-0 group-hover:bg-[#004659]'>
              <img src={arrowRight} 
              alt="Arrow Right Icon"
              className='w-10 h-10 py-2 px-2 text-white' 
              />
            </div>
          </div>
        </div>
        <div className='grid col-start-3 col-span-1 gap-6 md:py-0 py-12 [&_p]:text-base lg:[&_p]:text-lg'>
          <p>40,000 people from over 150 countries –  and from many different origins as well as cultural and religious backgrounds – study, teach, and work at Freie Universität Berlin.</p>
          <p>Diversity is a cornerstone of our university.</p>
          <p>And compassion, respect, and tolerance are the pillars that reinforce our community. Antisemitism, racism, and discrimination have no place at Freie Universität.</p>
          <p>As a university, we welcome debate on our campus and strive to foster the kind of open and democratic culture required to discuss a wide range of topics, including controversial and difficult ones. </p>
        </div>
      </div>
    </main>
  )
}
