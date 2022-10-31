import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Question from '../Question/Question'
import Services from '../Services/Services'
import Teams from '../Teams/Teams'
import Testimonials from '../Testimonial/Testimonials'
import WhyChoose from '../WhyChoose/WhyChoose'

const Home = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Banner />
            <About />
            <Services />
            <Question />
            <Products />
            <Teams />
            <WhyChoose />
            <Testimonials />
        </div>
    )
}

export default Home