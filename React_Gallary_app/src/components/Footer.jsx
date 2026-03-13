import React from 'react';

const Footer = () => {
  return (
    <footer className='py-12 bg-white border-t border-gray-100'>
        <div className='max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-6'>
            <h2 className='text-3xl font-black tracking-tighter text-gray-900'>
                BLACK ARO.
            </h2>
            <div className='flex items-center gap-4 text-sm font-medium text-gray-400'>
                <p>Arbaz Ali © 2026</p>
                <span className='w-1.5 h-1.5 bg-gray-300 rounded-full'></span>
                <a 
                    href="https://arbazali.framer.website" 
                    target="_blank" 
                    rel="noreferrer" 
                    className='hover:text-gray-900 transition-colors duration-300'
                >
                    arbazali.framer.website
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;