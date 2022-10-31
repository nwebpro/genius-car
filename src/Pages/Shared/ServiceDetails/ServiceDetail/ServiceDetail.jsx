import React from 'react'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
import Checkout from '../Checkout/Checkout'
import Download from '../Download/Download'
import GetAQuote from '../GetAQuote/GetAQuote'
import MoreService from '../MoreService/MoreService'
import ServiceContent from '../ServiceContent/ServiceContent'

const ServiceDetail = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Breadcrumb />
            <div className='container mx-auto mb-b-70 lg:mb-b-130'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='md:col-span-2'>
                        <ServiceContent />
                    </div>
                    <div>
                        <MoreService />
                        <Download />
                        <GetAQuote />
                        <Checkout />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail