import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceHeading from './ServiceHeading'
import ServiceItem from './ServiceItem'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/genius-car/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])

    return (
        <section className='container mx-auto mb-b-70 lg:mb-b-130'>
            <ServiceHeading />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-b-50'>
                {
                    services.map(service => (
                        <ServiceItem key={service?._id} service={service} />
                    ))
                }
            </div>
            <div className='text-center'>
                <Link
                    to="/services"
                    className="font-semibold transition-colors duration-200 text-theme-default text-lg leading-21 border border-theme-default px-[22px] py-[17px] rounded-md hover:bg-theme-default hover:text-white"
                    aria-label="More Services"
                    title="More Services"
                    >
                        More Services
                </Link>
            </div>
        </section>
    )
}

export default Services