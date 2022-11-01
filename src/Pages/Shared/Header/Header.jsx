import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { BiSearch, BiShoppingBag } from "react-icons/bi"

const navLinks = [
    {
      id: "home",
      title: "Home",
      path: '/home'
    },
    {
      id: "about",
      title: "About",
      path: '/about'
    },
    {
      id: "services",
      title: "Services",
      path: '/services'
    },
    {
      id: "blog",
      title: "Blog",
      path: '/blog'
    },
    {
      id: "contact",
      title: "Contact",
      path: '/contact'
    }
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div class="mx-auto container h-[86.78px] my-b-50 px-[15px] lg:px-0">
            <div class="relative flex items-center justify-between">
                <Link
                to="/"
                aria-label="Genius Car"
                title="Genius Car"
                class="inline-flex items-center"
                >
                    <img src={ logo } alt="Genius Car Logo" />
                </Link>
                <ul class="items-center hidden space-x-8 lg:flex">
                    {
                        navLinks.map(navItem => (
                            <li key={ navItem.id }>
                                <Link
                                to={ navItem.path }
                                aria-label={ navItem.title }
                                title={ navItem.title }
                                class="font-semibold text-theme-body transition-colors duration-200 hover:text-theme-default text-lg leading-21"
                                >
                                    { navItem.title }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul class="items-center hidden space-x-8 lg:flex">
                    <li className='cursor-pointer'>
                        <BiShoppingBag className='font-semibold text-theme-body transition-colors duration-200 hover:text-theme-default text-xl leading-21' />
                    </li>
                    <li className='cursor-pointer'>
                        <BiSearch className='font-semibold text-theme-body transition-colors duration-200 hover:text-theme-default text-xl leading-21' />
                    </li>
                    <li>
                        <Link
                        to="/contact"
                        class="font-semibold transition-colors duration-200 text-theme-default text-lg leading-21 border border-theme-default px-7 pt-[15px] pb-[19px] rounded-md hover:bg-theme-default hover:text-white"
                        aria-label="Appointment"
                        title="Appointment"
                        >
                            Appointment
                        </Link>
                    </li>
                </ul>
                <div class="lg:hidden flex items-center space-x-2">
                    <ul className='items-center flex space-x-5'>
                        <li className='cursor-pointer'>
                            <BiShoppingBag className='font-semibold text-theme-body transition-colors duration-200 hover:text-theme-default text-xl leading-21' />
                        </li>
                        <li className='cursor-pointer'>
                            <BiSearch className='font-semibold text-theme-body transition-colors duration-200 hover:text-theme-default text-xl leading-21' />
                        </li>
                    </ul>
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        class="p-2 -mr-1"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg class="w-5 text-theme-body" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                            fill="currentColor"
                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div class="absolute top-0 left-0 w-full z-50">
                            <div class="p-5 bg-white border rounded shadow-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                        to="/"
                                        aria-label="Genius Car"
                                        title="Genius Car"
                                        class="inline-flex items-center"
                                        >
                                            <img src={ logo } alt="Genius Car Logo" />
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        class="p-2 -mt-2 -mr-2"
                                        onClick={() => setIsMenuOpen(false)}
                                        >
                                        <svg class="w-5 text-theme-default" viewBox="0 0 24 24">
                                            <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul class="space-y-4">
                                        {
                                            navLinks.map(navItem => (
                                                <li key={ navItem.id }>
                                                    <Link
                                                        to={ navItem.path }
                                                        aria-label={ navItem.title }
                                                        title={ navItem.title }
                                                        class="font-semibold text-theme-body transition-colors duration-200 hover:text-theme-default text-lg leading-21"
                                                        >
                                                            { navItem.title }
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header