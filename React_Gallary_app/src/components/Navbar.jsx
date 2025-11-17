import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5 bg-[#0d0d0d]/80 backdrop-blur-xl text-white shadow-lg border-b border-white/10'>
        <h1 className='text-2xl font-bold tracking-wide'>BLACK ARO</h1>

        <div className='flex gap-7 text-gray-300 font-medium'>
            <h4 className='hover:text-white transition'>Home</h4>
            <h4 className='hover:text-white transition'>About</h4>
            <h4 className='hover:text-white transition'>Contact</h4>
        </div>
    </div>
  )
}

export default Navbar
