import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Question from '../Question/Question'
import Services from '../Services/Services'
import Teams from '../Teams/Teams'
import WhyChoose from '../WhyChoose/WhyChoose'

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Question />
            <Products />
            <Teams />
            <WhyChoose />
        </>
    )
}

export default Home