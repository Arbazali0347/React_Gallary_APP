import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='fixed top-6 w-full flex justify-center z-50 px-4'>
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className='bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-8 py-3 flex justify-between items-center gap-10 md:gap-24'
        >
            <h1 className='text-xl font-black tracking-tighter text-gray-900'>
                BLACK ARO.
            </h1>

            <div className='flex gap-6 md:gap-8 text-sm font-semibold text-gray-500'>
                {['Home', 'Gallery', 'Contact'].map((item, i) => (
                    <motion.a 
                        key={item}
                        href="#"
                        whileHover={{ scale: 1.05, color: "#111827" }}
                        className='transition-colors duration-300 relative group'
                    >
                        {item}
                        {/* Hover Underline Animation */}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                ))}
            </div>
        </motion.nav>
    </div>
  )
}

export default Navbar;