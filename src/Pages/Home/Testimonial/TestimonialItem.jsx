import React from 'react'
import { HiStar } from 'react-icons/hi'

const TestimonialItem = ({ testimonial }) => {
    const { name, title, img, icon, description } = testimonial
    return (
        <div className='border border-[#F3F3F3] rounded-rounded-10 p-b-30 md:p-b-50'>
            <div className='flex items-center gap-5 mb-[22px]'>
                <img src={ img } alt={ name } />
                <div>
                    <h2 className='text-theme-body text-text-25 leading-leading-30 font-bold mb-[10px]'>{ name }</h2>
                    <p className='font-semibold text-lg leading-6 text-theme-text'>{ title }</p>
                </div>
                <img className='ml-16' src={ icon } alt="icon" />
            </div>
            <p className='mb-5 capitalize text-theme-text font-normal text-base leading-leading-30'>{ description }</p>
            <div className='flex mb-[10px] text-[#FF912C] text-xl'>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
            </div>
        </div>
    )
}

export default TestimonialItem