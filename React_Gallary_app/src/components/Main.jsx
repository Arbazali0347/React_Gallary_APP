import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";
import { motion } from 'framer-motion';

const Main = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const limit = 8; 

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
            setData(data);
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    return (
        <div className='bg-[#F9FAFB] min-h-screen pt-32 pb-24 font-sans'>
            
            {/* Elegant Header */}
            <div className='text-center px-5 mb-16'>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-4xl md:text-6xl font-black text-gray-900 tracking-tighter'
                >
                    Discover <span className='text-gray-300'>Moments</span>
                </motion.h2>
                <p className='mt-4 text-gray-500 font-medium max-w-md mx-auto'>
                    Explore our curated collection of high-quality visuals and creative captures.
                </p>
            </div>

            {/* Cards Grid */}
            <div className='px-6 md:px-12 max-w-[1400px] mx-auto'>
                <motion.div layout className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {loading ? (
                        <div className="col-span-full flex justify-center py-20">
                            <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        data.map((item, idx) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                <Card item={item} />
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>

            {/* Modern Pagination */}
            <div className='flex justify-center items-center gap-4 mt-20'>
                <button 
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    className='w-12 h-12 flex justify-center items-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white rounded-full transition-all duration-300 shadow-sm disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-gray-600'
                    disabled={page === 1 || loading}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className='px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-900 font-bold'>
                    {page}
                </div>

                <button 
                    onClick={() => setPage(prev => prev + 1)}
                    className='w-12 h-12 flex justify-center items-center bg-white border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white rounded-full transition-all duration-300 shadow-sm disabled:opacity-40'
                    disabled={loading}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Main;