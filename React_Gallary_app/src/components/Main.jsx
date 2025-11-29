import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"

const Main = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)          // pagination page
    const limit = 8                               // per page items

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            setData(data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])   // page change → fetch again

    return (
        <div className='bg-[#0a0a0a] min-h-screen pb-20'>
            
            {/* Cards Grid */}
            <div className='pt-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {data.map((item, idx) => (
                    <Card key={idx} item={item} />
                ))}
            </div>

            {/* Pagination */}
            <div className='flex justify-center items-center gap-5 mt-10 text-white'>

                <button 
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    className='px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition disabled:opacity-40'
                    disabled={page === 1}
                >
                    Previous
                </button>

                <h2 className='text-lg font-semibold tracking-wide bg-white/10 px-4 py-2 rounded-xl'>
                    Page {page}
                </h2>

                <button 
                    onClick={() => setPage(prev => prev + 1)}
                    className='px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition'
                >
                    Next
                </button>

            </div>
        </div>
    )
}

export default Main
