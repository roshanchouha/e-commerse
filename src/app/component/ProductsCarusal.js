"use client"
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';  
import { Carousel } from 'react-responsive-carousel';

const ProductsCarusal = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1320px] mx-auto sticky top-[50px]'>
        <Carousel
           infiniteLoop={true}
           showIndicators={false}
           showStatus={false}
           thumbWidth={60}
           className='productCarousel'
         >
          <img src="/p1.png" alt="productimge" />
          <img src="/p2.png" alt="productimge" />
          <img src="/p3.png" alt="productimge" />
          <img src="/p4.png" alt="productimge" />
          <img src="/p5.png" alt="productimge" />
          <img src="/p6.png" alt="productimge" />
          <img src="/p7.png" alt="productimge" />
          
        </Carousel>
    </div>
  )
}
export default ProductsCarusal
