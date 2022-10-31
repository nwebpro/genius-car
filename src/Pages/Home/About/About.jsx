import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className='container mx-auto py-b-70 lg:py-b-130'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[61px]'>
                <div className='relative mb-20 lg:mb-0'>
                    <img className='w-[460px] h-[473px] object-left object-cover ' src={ person } alt="" />
                    <img className='absolute w-[327px] h-[332px] object-cover border-8 border-white rounded-rounded-10 right-0 md:right-32 lg:right-0 top-[235px]' src={ parts } alt="" />
                </div>
                <div>
                    <h3 className='text-theme-default text-xl leading-6 font-bold mb-5'>About Us</h3>
                    <h2 className='font-bold text-theme-dark text-4xl leading-10 md:text-text-45 md:leading-leading-54 md:w-80 lg:w-96 mb-b-30'>We are qualified & of experience in this field</h2>
                    <p className='text-base font-normal leading-leading-30 text-theme-text lg:pr-[70px] mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className='text-base font-normal leading-leading-30 text-theme-text lg:pr-[70px] mb-b-30'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Link
                        to="/"
                        class="inline-block font-semibold transition-colors duration-200 text-white text-lg leading-21 border border-theme-default bg-theme-default px-[26px] py-[17px] rounded-md hover:bg-transparent hover:border-theme-default hover:text-theme-default"
                        aria-label="Get More Info"
                        title="Get More Info"
                        >
                            Get More Info
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About