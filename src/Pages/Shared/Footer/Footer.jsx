import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import logoWhite from '../../../assets/logoWhite.svg'

const Footer = () => {
    return (
        <footer className='bg-theme-dark py-b-70 lg:py-b-130 text-white px-[15px] lg:px-0'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                    <div className='lg:col-span-2 mb-b-30 lg:mb-0'>
                        <img className='mb-5' src={ logoWhite } alt="Footer Logo" />
                        <p className='text-[#E8E8E8] text-base leading-6 font-normal mb-5 lg:w-2/3'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                        <div className='flex gap-2'>
                            <FaFacebookF className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                            <FaTwitter className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                            <FaLinkedinIn className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                            <FaInstagram className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                        </div>
                    </div>
                    <div className='mb-b-30 lg:mb-0'>
                        <h3 className='mb-6 lg:mb-10 text-semibold text-xl leading-6'>About</h3>
                        <ul>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/services'>Services</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-b-30 lg:mb-0'>
                        <h3 className='mb-6 lg:mb-10 text-semibold text-xl leading-6'>Company</h3>
                        <ul>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/'>Why Car Doctor</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/about'>About</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/dashboard'>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-6 lg:mb-10 text-semibold text-xl leading-6'>Support</h3>
                        <ul>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/'>Support Center</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/services'>Feedback</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/contact'>Accessability</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer