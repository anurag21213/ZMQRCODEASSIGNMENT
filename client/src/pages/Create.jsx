import React from 'react'
import { create } from '../database/create'
import Card from '../components/Card'
import { motion } from 'framer-motion'

const Create = () => {
  return (
    <motion.div 
    initial={{y:-300,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:1.2}}
    
    className='flex items-center justify-center md:justify-between max-w-[80%] mx-auto mt-10 flex-wrap'>
      {
        create.map((item)=>{
            return <Card
                key={item.heading}
                heading={item.heading}
                style="rounded-sm "
                headingStyle="text-green-500"
                description={item.description}
                img={item.img}
            />
        })
      }
    </motion.div>
  )
}

export default Create
