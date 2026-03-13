import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ item }) => {
    const { download_url, author } = item;
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='group relative aspect-[4/5] bg-[#0a0a0a] border border-white/5 overflow-hidden p-4'
        >
            {/* Image Container */}
            <div className='relative w-full h-full overflow-hidden'>
                <img 
                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100' 
                    src={download_url} 
                    alt={author} 
                />
                
                {/* Overlay Text */}
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6'>
                    <p className='text-white text-[10px] uppercase tracking-[0.3em] mb-2 overflow-hidden'>
                        Shot by {author}
                    </p>
                    <div className='h-[1px] w-0 group-hover:w-full bg-white transition-all duration-700'></div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card;