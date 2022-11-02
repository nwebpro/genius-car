import React from 'react'
import { Link } from 'react-router-dom'
import breadcrumb from '../../../assets/images/breadcrumb.png'
import './Breadcrumb.css'

const Breadcrumb = ({ title }) => {
    return (
        <section className='container mx-auto mb-b-70 lg:mb-b-130 relative'>
            <div className='ab__breadcrumb_img'>
                <img src={ breadcrumb } alt="" className='w-full' />
            </div>
            <div className='absolute text-white top-[50%] -translate-y-[50%] pl-[100px]'>
                <h1 className='text-4xl leading-10 md:text-text-45 md:leading-leading-54 font-bold'>{ title }</h1>
            </div>
            <div className='absolute bottom-0 left-[50%] -translate-x-[50%]'>
                <nav aria-label="breadcrumb" className="w-full py-3 px-10 bg-theme-default">
                    <ol className="flex h-8 space-x-2 dark:text-gray-100">
                        <li className="flex items-center">
                            <Link to="/" title="Back to homepage" className="flex items-center">Home</Link>
                        </li>
                        <li className="flex items-center space-x-1">
                            <span>/</span>
                            <p className="flex items-center px-1 capitalize">{ title }</p>
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    )
}

export default Breadcrumb