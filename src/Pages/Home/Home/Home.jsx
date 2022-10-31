import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Question from '../Question/Question'
import Services from '../Services/Services'

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Question />
            <Products />
        </>
    )
}

export default Home