import React from 'react'
import { HiStar, HiOutlineShoppingBag } from 'react-icons/hi'
import './ProductItem.css'

const ProductItem = ({ product }) => {
    const { title, img, price } = product
    return (
        <div className='p-[25px] rounded-rounded-10 border border-[#E8E8E8] relative text-center cursor-pointer ab__cart_icon_style'>
            <div className='bg-[#F3F3F3] rounded-rounded-10 mb-5 text-center py-8'>
                <img className='w-[156px] h-[153px] mx-auto' src={ img } alt={ title } />
            </div>
            <div className='flex justify-center mb-[10px] text-[#FF912C] text-xl'>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
            </div>
            <h3 className='text-text-body text-text-25 leading-leading-30 font-bold mb-[10px]'>{ title }</h3>
            <p className='text-theme-default text-xl font-semibold leading-6'>${ price }</p>
            <div className='bg-white rounded-rounded-10 absolute top-12 right-12 text-theme-default text-2xl py-4 px-4 hidden ab__cart_style'>
                <HiOutlineShoppingBag />
            </div>
        </div>
    )
}

export default ProductItem