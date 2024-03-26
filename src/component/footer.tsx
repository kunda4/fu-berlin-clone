import React from 'react'
import chevlonRightBlack from '../assets/chevlonRightBlack.svg'
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'

export default function Footer() {
  return (
    <footer className='py-6 lg:pb-12 [&_span]:text-sm'>
        <div className='lg:grid grid-cols-4 justify-start gap-8 border-b border-black pb-12'>
            <div className='flex flex-col gap-2'>
                <h4 className='text-xl py-4'>Information for</h4>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Employees</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Prospective Students</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Refugees</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Student and doctorate</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Researchers</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Alumin and Supporters</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Jounalist</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Continuing Education</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Employees</span>
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h4 className='text-xl py-4'>Service Navigation</h4>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Homepage</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Contact</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Legal Notice</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Data Protection Policy</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Researchers</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
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
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Print</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Prospective Students</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Feedback</span>
                </p>
                <p className='flex gap-2'>
                    <img src={chevlonRightBlack} 
                    alt="chevlon right icon"
                    className='w-6 h-6' />
                    <span className='hover:underline'>Student and doctorate</span>
                </p>
              
            </div>
        </div>
        <div className='flex items-center gap-4 lg:gap-16 w-full lg:w-[60%] pt-12'>
            <img src="https://www.fu-berlin.de/assets/default2/fu-siegel-web-schwarz-684a4d11be3c3400d8906a344a77c9a4.png" 
            alt="footer icon" 
            className='t w-32 h-32 lg:w-40 lg:h-1/2'/>
            <p className='md:text-base text-sm'>The Latin words veritas, justitia, and libertas, which frame the seal 
            of Freie Universität Berlin, stand for the values that have defined the academic ethos of Freie 
            Universität since its founding in December 1948.</p>
        </div>
    </footer>
  )
}
