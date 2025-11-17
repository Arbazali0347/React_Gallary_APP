import React from 'react'

const Card = ({ item }) => {
    const { download_url, author } = item;
    return (
        <div className='bg-[#111]/80 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300'>
            
            <div className='w-full h-48'>
                <img 
                    className='w-full h-full object-cover' 
                    src={download_url} 
                    loading="lazy"
                    alt="image" 
                />
            </div>

            <div className='p-4 flex justify-center items-center'>
                <h1 className='text-gray-200 text-lg font-semibold tracking-wide'>
                    @{author}
                </h1>
            </div>
        </div>
    )
}

export default Card
