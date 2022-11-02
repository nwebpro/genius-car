import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb'
import OrderRow from './OrderRow'

const Order = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/genius-car/orders')
        .then(res => res.json())
        .then(data => setOrders(data.data))
    }, [])

    const handleStatusUpdate = statusUpdateId => {
        fetch(`http://localhost:5000/api/genius-car/order/${statusUpdateId}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved'} )
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success) {
                const remaining = orders.filter(order => order._id !== statusUpdateId)
                const approving = orders.find(order => order._id === statusUpdateId)
                approving.status = 'Approved'
                const newOrders = [approving, ...remaining]
                setOrders(newOrders)
            }
        })

    }

    return (
        <div className='container mx-auto px-[15px] lg:px-0 mb-b-70 lg:mb-b-130'>
            <Breadcrumb />
            <table className="min-w-full text-xs -mt-b-50 lg:-mt-b-70">
                <thead className="bg-theme-text text-white border border-b-0">
                    <tr className="text-center">
                        <th className="p-3">Image</th>
                        <th className="p-3">Product Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => (
                            <OrderRow 
                                key={order?._id} 
                                order={order} 
                                handleStatusUpdate={handleStatusUpdate}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Order