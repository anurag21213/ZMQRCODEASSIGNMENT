import React from 'react'
import { motion } from 'framer-motion'
import { testimonial } from '../database/testimonialData'
import TestCard from '../components/TestCard'
import Slider from "react-slick";

const Testimonial = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full'>
      <div className='max-w-[80%] mx-auto  '>
        <div className='flex items-center flex-wrap '>
          <div className='w-[400px] h-[300px] flex items-center justify-center'>
            <h1 className='text-5xl font-semibold'>Trusted by over 8M sellers around the world</h1>
          </div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}

            className='w-[400px] h-[300px] flex items-center justify-center'>
            <p className='text-slate-700'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
          </motion.div>
        </div>
        <div className='slider-container w-full'>
          <Slider {...settings} className=' flex items-center justify-center gap-5'>

            {
              testimonial.map((item) => <TestCard
                key={item.name}
                name={item.name}
                img={item.img}
                store={item.store}
                star={item.star}
                description={item.description}
              />)
            }



          </Slider>

        </div>


      </div>
    </div>
  )
}

export default Testimonial
