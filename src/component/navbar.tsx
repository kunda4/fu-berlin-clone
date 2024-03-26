import React from 'react'
import logo from '../assets/logo.png'
import downIcon from '../assets/downIcon.svg'
import search from '../assets/search.svg'
export default function Navbar() {
  return (
    <nav className='flex justify-between px-24 py-6'>
        <div >
            <img src={logo} 
            alt="fu-berlin-logo"
            className='w-1/3 h-24'/>
        </div>
        <div className='flex flex-col gap-6'>
            <ul className='flex gap-6'>
                <li>Homepage</li>
                <li>Contact</li>
                <li>Legal Notice</li>
                <li>Data Protection Policy</li>
                <li>Emergencies</li>
                <li>Accessibility Statement</li>
            </ul>
            <div className='flex justify-end gap-6'>
                <h5 className='flex gap-2'>
                    <span>En</span>
                    <img src={downIcon} 
                    alt=""
                    className='w-6 h-6'/>
                </h5>
                <h5 className='flex gap-2'>
                    <span>Quicklinks</span>
                    <img src={downIcon} 
                    alt=""
                    className='w-6 h-6' />
                </h5>
                <h5 className='flex gap-2'>
                    <span>Information for</span>
                    <img 
                    src={downIcon} 
                    alt=""
                    className='w-6 h-6' />
                </h5>
                <h5 className='flex gap-2'>
                    <span>Search with goole...</span>
                    <img src={search} 
                    alt="" 
                    className='w-6 h-6'/>
                </h5>
            </div>
        </div>
    </nav>
  )
}
