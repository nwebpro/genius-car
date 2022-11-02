import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleStatusUpdate, handleOrderDelete }) => {
    const { _id, serviceName, phone, email, customer, price, service, status } = order
    const [orderService, setOrderService] = useState([])

    useEffect(() => {
        fetch(`https://genius-car.vercel.app/api/genius-car/service/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data.data));
    }, [service])

    return (
        <tr className="border border-t-0 text-center">
            <td className="p-3 flex items-center gap-2">
                <button onClick={() => handleOrderDelete(_id)} className="btn btn-circle btn-outline btn-xs btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
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