import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";
import { motion } from 'framer-motion';

const Main = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 8;

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then(res => setData(res.data));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    return (
        <div className='bg-[#030303] min-h-screen relative overflow-hidden'>
            
            {/* background Aurora Blobs */}
            <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse'></div>
            <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse delay-700'></div>

            <div className='relative z-10 pt-40 px-6 md:px-16 max-w-[1600px] mx-auto'>
                <header className='mb-20'>
                    <motion.h2 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className='text-5xl md:text-8xl font-light text-white tracking-tighter italic'
                    >
                        COLLECTIVE<br/><span className='text-gray-600 not-italic'>2026©</span>
                    </motion.h2>
                </header>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {data.map((item) => <Card key={item.id} item={item} />)}
                </div>

                {/* Aesthetic Pagination */}
                <div className='flex justify-between items-center mt-24 pb-20 border-t border-white/5 pt-10'>
                    <button 
                        onClick={() => setPage(p => Math.max(p - 1, 1))}
                        className='text-white text-[10px] uppercase tracking-widest hover:pl-4 transition-all'
                    >
                        ← Previous
                    </button>
                    <span className='text-gray-600 text-[10px] uppercase tracking-widest'>Index 0{page}</span>
                    <button 
                        onClick={() => setPage(p => p + 1)}
                        className='text-white text-[10px] uppercase tracking-widest hover:pr-4 transition-all'
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;