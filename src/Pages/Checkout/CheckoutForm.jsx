import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CheckoutForm = ({ service }) => {
    const navigate = useNavigate()
    const { _id, price, title, img } = service

    const handlePlaceOrder = e => {
        e.preventDefault()
        const form = e.target
        const name = `${form.first_name.value} ${form.last_name.value}`
        const email = form.email.value
        const phone = form.phone.value
        const message = form.message.value

        const placeOrder = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/api/genius-car/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placeOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast.success(data.message)
                form.reset()
                navigate('/')
            }else{
                toast.error(data.error)
            }
        })
        .catch(err => {
            toast.error(err.message)
        })
    }

    return (
        <section className="mx-auto container bg-[#F3F3F3] rounded-rounded-10 mb-b-70 lg:mb-b-130">
            <div className='px-10 md:px-16 lg:px-24 pt-10 md:pt-16 lg:pt-24'>
                <div className='p-5 rounded-rounded-10 bg-white flex w-full md:max-w-sm justify-between items-center mx-auto'>
                    <img className='w-40 rounded-rounded-10' src={ img } alt={ title } />
                    <div>
                        <h3 className='text-theme-dark text-xl font-bold leading-leading-30'>{ title }</h3>
                        <p className='font-bold text-lg text-theme-default'>${ price }</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="p-10 md:p-16 lg:p-24">
                    <form onSubmit={handlePlaceOrder} className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="text"
                                name="first_name"
                                placeholder='First Name'
                            />
                        </div>
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="text"
                                name="last_name"
                                placeholder='Last Name'
                            />
                        </div>
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="tel"
                                name="phone"
                                placeholder='Your Phone'
                            />
                        </div>
                        <div className="col-span-6 md:col-span-3">
                            <input
                                className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="email"
                                name="email"
                                placeholder='Your Email'
                            />
                        </div>
                        <div className="col-span-6">
                            <textarea name="message" rows="8" className="w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default" placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-span-6">
                            <button
                                className="block w-full py-4 text-xl leading-leading-30 font-semibold text-white bg-theme-default rounded-rounded-10"
                                type="submit"
                            >
                                Order Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CheckoutForm