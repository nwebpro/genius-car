import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams()

    useEffect(() => {
        fetch(`https://genius-car.vercel.app/api/genius-car/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data.data))
    }, [serviceId])

    return (
        <div className='px-[15px] lg:px-0'>
            <Breadcrumb title='Contact Page' />
            <CheckoutForm service={ service } />
        </div>
    )
}

export default Checkout