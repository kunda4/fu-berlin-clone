import React from 'react'
import logo from '../assets/logo.png'
import downIcon from '../assets/downIcon.svg'
import search from '../assets/search.svg'
import ellipis from '../assets/ellipis.svg'
import menu from '../assets/menu.svg'

export default function Navbar() {
  return (
    <nav className='px:2 lg:px-12'>
    <div className='flex justify-between py-4'>
        <div >
            <img src={logo} 
            alt="fu-berlin-logo"
            className='w-52 h-16 lg:w-80 lg:h-24'/>
        </div>
        <div className=' lg:hidden block flex flex-row gap-3 pr-6 items-center'>
            <img src={search} alt="Search Icon" className='w-8 h-8'/>
            <img src={ellipis} alt="Ellipis horizontally" className='w-10 h-10' />
        </div>
        <div className='lg:block hidden  lg:flex flex-col gap-6'>
            <ul className='flex gap-6'>
                <li>Homepage</li>
                <li>Contact</li>
                <li>Legal Notice</li>
                <li>Data Protection Policy</li>
                <li>Emergencies</li>
                <li>Accessibility Statement</li>
            </ul>
            <div className='flex justify-end gap-6'>
                <h5 className='flex gap-2 py-2 px-2 border rounded border-gray-400'>
                    <span>En</span>
                    <img src={downIcon} 
                    alt="downIcon"
                    className='w-6 h-6'/>
                </h5>
                <h5 className='flex gap-2 py-2 px-2 border rounded border-gray-400'>
                    <span>Quicklinks</span>
                    <img src={downIcon} 
                    alt="downIcon"
                    className='w-6 h-6' />
                </h5>
                <h5 className='flex gap-2 py-2 px-2 border rounded border-gray-400'>
                    <span>Information for</span>
                    <img 
                    src={downIcon} 
                    alt="downIcon"
                    className='w-6 h-6' />
                </h5>
                <h5 className='flex gap-2 py-2 px-2 border rounded border-gray-400'>
                    <span className='t text-gray-500'>Search with Google ...</span>
                    <img src={search} 
                    alt="search Icon" 
                    className='w-6 h-6'/>
                </h5>
            </div>
        </div>
    </div>
    <h3 className='bg-gray-100 py-2 px-2 lg:px-4 text-lg lg:text-xl'>FREIE UNIVERSITAT BERLIN</h3>
    <div className='lg:hidden block flex flex-row justify-between px-2 py-2 border-b-4 border-black'>
        <span>MENU</span>
        <img src={menu} alt="menu Icon" className='w-6 h-6' />
    </div>
    <ul className='lg:block hidden lg:flex gap-4 justify-start border-b-4 border-black py-3 [&_li]:font-semibold [&_li]:text-lg'>
        <li>ABOUT</li>
        <li>EDUCATION</li>
        <li>RESEARCH</li>
        <li>DEPARTMENTS</li>
        <li>INTERNATIONAL</li>
        <li>EXCELENCE STRATEGY</li>
    </ul>
    </nav>
  )
}
