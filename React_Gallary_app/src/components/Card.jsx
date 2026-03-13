import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ item }) => {
    const { download_url, author } = item;
    
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            className='group bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer border border-gray-100'
        >
            <div className='w-full h-64 md:h-80 overflow-hidden rounded-[1.5rem]'>
                <img 
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                    src={download_url} 
                    loading="lazy"
                    alt={author} 
                />
            </div>

            <div className='px-4 py-5 flex justify-between items-center'>
                <div>
                    <h1 className='text-gray-900 text-lg font-bold tracking-tight'>
                        {author}
                    </h1>
                    <p className='text-sm text-gray-400 font-medium mt-0.5'>
                        Original Capture
                    </p>
                </div>
                
                {/* Small floating action button inside card */}
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-10 h-10 rounded-full bg-gray-50 flex justify-center items-center text-gray-600 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </motion.button>
            </div>
        </motion.div>
    )
}

export default Card;