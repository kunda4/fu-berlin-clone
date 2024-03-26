import React from 'react'
import chevlonRight from '../assets/chevlonRight.svg'
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'

export default function Footer() {
  return (
    <footer className='px-24 pb-12 [&_span]:text-sm'>
        <div className='grid grid-cols-4 justify-start gap-8 border-b border-black pb-12'>
            <div className='flex flex-col gap-2'>
                <h4 className='text-xl py-4'>Information for</h4>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Employees</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Prospective Students</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Refugees</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Student and doctorate</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Researchers</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Alumin and Supporters</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Jounalist</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Continuing Education</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Employees</span>
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='text-xl py-4'>Service Navigation</h4>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Homepage</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Contact</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Legal Notice</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Data Protection Policy</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Researchers</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Alumin and Supporters</span>
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='text-xl py-4'>Social Media</h4>
                <p className='flex gap-2'>
                    <img src= {facebook}
                    alt="chevlon right icon"
                    className='w-8 h-8' />
                    <span className='hover:underline'>Facebook</span>
                </p>
                <p className='flex gap-2'>
                    <img src={twitter} 
                    alt="chevlon right icon"
                    className='w-8 h-8' />
                    <span className='hover:underline'>Twitter</span>
                </p>
                <p className='flex gap-2'>
                    <img src={instagram} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Instagram</span>
                </p>
                <p className='flex gap-2'>
                    <img src={youtube} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Youtube</span>
                </p>
                <p className='flex gap-2'>
                    <img src={google} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Google Plus</span>
                </p>
                <p className='flex gap-2'>
                    <img src={linkedin} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Linkedin</span>
                </p>
                <span className='text-gray-500'>information about using social media</span>
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='text-xl py-4'>This Page</h4>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Print</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Prospective Students</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Feedback</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRight} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Student and doctorate</span>
                </p>
              
            </div>
        </div>
        <div className='flex items-center gap-16 w-[60%] pt-12'>
            <img src="https://www.fu-berlin.de/assets/default2/fu-siegel-web-schwarz-684a4d11be3c3400d8906a344a77c9a4.png" 
            alt="" 
            className='w-40 h-1/2'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facilis vero nostrum odit velit eius eaque quas? Consequatur 
                aliquam eos id at nam assumenda blanditiis minima nostrum, 
                expedita, numquam optio laborum.</p>
        </div>
    </footer>
  )
}
