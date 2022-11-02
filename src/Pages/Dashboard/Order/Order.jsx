import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider'
import Breadcrumb from '../../Shared/Breadcrumb/Breadcrumb'
import OrderRow from './OrderRow'
import Swal from 'sweetalert2'


const Order = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://genius-car.vercel.app/api/genius-car/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data.data))
    }, [user?.email, orders])

    const handleOrderDelete = deleteId => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`https://genius-car.vercel.app/api/genius-car/order/${deleteId}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.data.success) {
                        const remaining = orders.filter(order => order._id !== deleteId)
                        setOrders(remaining)
                    }
                })
            }
        })
    }

    const handleStatusUpdate = statusUpdateId => {
        fetch(`https://genius-car.vercel.app/api/genius-car/order/${statusUpdateId}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved'} )
        })
        .then(res => res.json())
        .then(data => {
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
            <Breadcrumb title='Order Page' />
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
                                handleOrderDelete={handleOrderDelete}
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