import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faPlay } from "@fortawesome/free-solid-svg-icons"
import shoes from '../assets/images/shoes-rb.png'

import { motion } from 'framer-motion'

import cat from '../assets/images/cat.jpg'
import p1 from '../assets/images/print1.jpg'
import p2 from '../assets/images/print2.jpg'
import p3 from '../assets/images/print3.jpg'
import p4 from '../assets/images/print 4.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {

    const images=[]
    images.push(cat)
    images.push(p1)
    images.push(p2)
    images.push(p3)
    images.push(p4)

    const [curr,setCurr]=useState(0)

    



    return (
        
        <div className='flex items-center justify-evenly flex-wrap lg:flex-nowrap p-20'>
            <div className='h-full flex justify-center items-center  '>
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-black text-6xl font-bold'>Explore some wide range of shoes</h1>
                    <h2 className='text-2xl mt-5'><span className='text-green-500 text-2xl'><FontAwesomeIcon icon={faCheck} /></span> 100% Authentic</h2>
                    <h2 className='text-2xl'><span className='text-green-500 text-2xl'><FontAwesomeIcon icon={faCheck} /></span> 900+ High-Quality Products</h2>
                    <h2 className='text-2xl'><span className='text-green-500 text-2xl'><FontAwesomeIcon icon={faCheck} /></span> Best customer experience</h2>
                    <div className='my-10'>
                        <Link to="/explore"><button className="text-white bg-green-500  p-5 rounded-sm font-semibold border-none mx-3">Explore collection</button></Link>
                    </div>
                    <p className='text-green-500 font-semibold'>Trusted by over 8M sellers around the world</p>
                </div>
            </div>

           



            <div className='p-5 flex items-center justify-center overflow-hidden'>

                <img src={shoes} className=''/>
                
                
            </div>

        </div>
    )
}

export default Hero
