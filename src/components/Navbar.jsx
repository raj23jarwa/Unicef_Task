import React from 'react'
import logo from '../assets/Images/logo.png'
const Navbar = () => {
  return (
    <>
     <header className='flex justify-end gap-10 bg-[#1cabe2] h-16 items-center pr-1'>
        <img src={logo} alt="unicef logo" className='w-80 h-10' />
        </header>   
    </>
  )
}

export default Navbar