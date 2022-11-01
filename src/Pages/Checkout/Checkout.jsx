import React from 'react'
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Breadcrumb />
            <CheckoutForm />
        </div>
    )
}

export default Checkout