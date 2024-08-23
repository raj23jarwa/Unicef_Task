import React from 'react'
import logo from '../assets/Images/logo.png'
const Footer = () => {
  return (
    <>
        <footer className='flex md:justify-evenly gap-1 items-center flex-col md:flex-row md:gap-10 bg-[#1cabe2] h-20  pr-1 relative b-0 overflow-hidden'>
        <img src={logo} alt="unicef logo" className='md:w-80 w-40' />
        <span className='text-white md:text-lg text-sm text-nowrap'>
        ©2023 UNICEF - All rights reserved
        </span>
        <div className='flex gap-2 text-white text-sm md:text-lg text-nowrap '>
            <span>Privacy Policy</span>
            <span>Legal</span>
            <span>Contact US</span>
        </div>
        </footer>    
    </>
  )
}

export default Footer