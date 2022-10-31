import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from "react-icons/hi"

const ServiceItem = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div className='p-[25px] rounded-rounded-10 border border-[#E8E8E8]'>
            <img className='rounded-rounded-10 w-full h-[210px] object-cover mb-5' src={ img } alt={ title } />
            <h3 className='text-text-body text-text-25 leading-leading-30 font-bold mb-5'>{ title }</h3>
            <div className='flex justify-between items-center'>
                <p className='text-theme-default text-xl font-semibold leading-6'>Price: ${ price }</p>
                <Link to={ _id }>
                    <HiArrowNarrowRight className='text-theme-default text-xl font-semibold leading-6' />
                </Link>
            </div>
        </div>
    )
}

export default ServiceItem