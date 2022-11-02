import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleStatusUpdate }) => {
    const { _id, serviceName, phone, email, customer, price, service, status } = order
    const [orderService, setOrderService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/genius-car/service/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data.data));
    }, [service])

    return (
        <tr className="border border-t-0 text-center">
            <td className="p-3">
                <img className='w-20 rounded-rounded-10' src={ orderService?.img } alt="" />
            </td>
            <td className="p-3">
                <p>{ serviceName }</p>
            </td>
            <td className="p-3">
                <p>${ price }</p>
            </td>
            <td className="p-3">
                <p>{ customer }</p>
            </td>
            <td className="p-3">
                <p>{ email }</p>
            </td>
            <td className="p-3">
                <p>{ phone }</p>
            </td>
            <td className="p-3">
                <span onClick={() => handleStatusUpdate(_id)} className={`cursor-pointer px-3 py-1 font-semibold rounded-md text-white ${status ? 'bg-[#29B170] opacity-50 cursor-not-allowed' : 'bg-theme-default'}`}>
                    { status ? status : 'Pending' }
                </span>
            </td>
        </tr>
    );
};

export default OrderRow;