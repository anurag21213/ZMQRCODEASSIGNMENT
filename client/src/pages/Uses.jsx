import React from 'react'
import theme from '../assets/images/theme.jpg'

import { motion } from 'framer-motion'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Uses = () => {
    return (
        <div className='w-full md:max-w-[80%] mx-auto '>
            <div className=' flex items-center justify-center flex-col md:flex-row md:justify-between overflow-hidden'>
                <div className=' h-[350px] w-[350px] md:h-[650px] md:w-[450px] '>
                    <img src={theme} className='w-full h-full rounded-lg md:rounded-ee-full md:z-10' />
                </div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}

                    className='p-6 w-[90%] md:w-[70%] flex items-center justify-center'>
                    <div className='w-full md:w-[450px]'>
                        <h1 className='font-bold text-2xl '>Easily add your design to a wide range of products</h1>
                        <p className='text-slate-700'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                        <p className='text-green-500'>All products <FontAwesomeIcon icon={faArrowRight} /> </p>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Uses
