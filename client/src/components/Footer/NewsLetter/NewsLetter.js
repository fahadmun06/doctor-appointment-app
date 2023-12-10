import './NewsLetter.scss';
import React from 'react'
import { FaShare } from 'react-icons/fa'

export default function NewsLetter() {
    return (
        <div className='rounded-2xl flex justify-center flex-col flex-1 items-center py-10 lg:py-16 w-[90%] md:w-3/4 lg:w-3/4 mx-auto shadow-lg bg-white mb-10 lg:mb-16'>
            <h1 className='font-bold text-md lg:text-2xl'>Subscribe to our newsletter!</h1>
            <p className='text-[10px] lg:text-xs opacity-75 mt-2 mb-6'>We'll send you the best of our blog just once a month.</p>
            <input className='w-3/5 lg:w-2/5 text-sm lg:text-lg bg-slate-300 text-slate-900 p-2 ps-4 rounded-lg' type="email" placeholder='Email Address here' required />
            <button className='bg-blue-500 rounded-full hover:bg-blue-900 py-2 px-4 lg:px-6 mt-3 lg:mt-5 text-white'>Subscribe<FaShare size={16} className='text-gray-200 ms-2 inline-block' /></button>
        </div>
    )
}
