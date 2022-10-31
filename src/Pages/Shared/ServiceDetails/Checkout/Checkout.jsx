import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <div>
            <h2 className='text-theme-dark font-bold text-2xl lg:text-[35px] leading-leading-30 lg:leading-42px] mb-b-30'>Price $250.00</h2>
            <Link
                to="/checkout"
                class="block text-center font-semibold transition-colors duration-200 text-lg leading-21 border border-theme-default py-[17px] rounded-md bg-theme-default text-white leading-leading-21"
                aria-label="Proceed Checkout"
                title="Proceed Checkout"
                >
                    Proceed Checkout
            </Link>
        </div>
    )
}

export default Checkout