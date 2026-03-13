import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#030303] pt-20 pb-10 px-8 border-t border-white/5'>
        <div className='text-center mb-20'>
            <h1 className='text-[12vw] font-black text-white/5 tracking-tighter leading-none select-none'>
                BLACK ARO
            </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-[0.3em]'>
            <p>Built with Passion</p>
            <p>© 2026 All Rights Reserved</p>
            <a href="#" className='hover:text-white'>Framer Portfolio</a>
        </div>
    </footer>
  )
}

export default Footer;