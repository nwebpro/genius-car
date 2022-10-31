import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Question from '../Question/Question'
import Service from '../Services/Service'
import Teams from '../Teams/Teams'
import Testimonials from '../Testimonial/Testimonials'
import WhyChoose from '../WhyChoose/WhyChoose'

const Home = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Banner />
            <About />
            <Service />
            <Question />
            <Products />
            <Teams />
            <WhyChoose />
            <Testimonials />
        </div>
    )
}

export default Home