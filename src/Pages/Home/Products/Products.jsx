import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductHeading from './ProductHeading'
import ProductItem from './ProductItem'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    return (
        <section className='container mx-auto mb-b-70 lg:mb-b-130'>
            <ProductHeading />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-b-50'>
                {
                    products.map(product => (
                        <ProductItem key={product?._id} product={product} />
                    ))
                }
            </div>
            <div className='text-center'>
                <Link
                    to="/products"
                    class="font-semibold transition-colors duration-200 text-theme-default text-lg leading-21 border border-theme-default px-[22px] py-[17px] rounded-md hover:bg-theme-default hover:text-white"
                    aria-label="More Products"
                    title="More Products"
                    >
                        More Products
                </Link>
            </div>
        </section>
    )
}

export default Products