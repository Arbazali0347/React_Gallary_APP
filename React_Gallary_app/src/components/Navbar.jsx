import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 bg-[#030303]/80 backdrop-blur-md border-b border-white/5'>
        <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-xl font-bold tracking-[0.3em] text-white italic'
        >
            ARO<span className='text-blue-500'>.</span>
        </motion.h1>

        <div className='hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-light'>
            {['Work', 'Gallery', 'Info'].map((item) => (
                <a key={item} href="#" className='hover:text-white transition-all duration-500'>{item}</a>
            ))}
        </div>

        <button className='text-white bg-white/5 hover:bg-white text-[10px] uppercase tracking-widest px-6 py-2 border border-white/10 rounded-full transition-all duration-700 hover:text-black'>
            Contact
        </button>
    </nav>
  )
}

export default Navbar;