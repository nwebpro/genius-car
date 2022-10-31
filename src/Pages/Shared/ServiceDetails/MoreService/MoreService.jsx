import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const MoreService = () => {
    return (
        <div className='bg-[#F3F3F3] p-10 rounded-rounded-10 mb-b-30'>
            <h3 className='font-bold text-2xl leading-leading-30 mb-5'>Services</h3>
            <div className='flex justify-between items-center bg-white p-5 rounded hover:bg-theme-default transition-colors duration-200 text-theme-dark hover:text-white mb-5'>
                <h3 className='font-semibold text-base leading-5'>Full Car Repair</h3>
                <HiArrowNarrowRight className='text-xl' />
            </div>
        </div>
    )
}

export default MoreService