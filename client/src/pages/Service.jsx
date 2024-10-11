import React from 'react'

import features from '../database/features'
import Card from '../components/Card'

const Service = () => {
  return (
    <div className='w-full md:max-w-[80%] mx-auto flex items-center justify-center md:justify-between flex-wrap p-5'>
      {
        features.map((item)=>{
          return <Card  
            key={item.heading}
            heading={item.heading}
            img={item.img}
            description={item.description}
            style="rounded-full border"
            headingStyle="text-black"
        
        />})
      }
    </div>
  )
}

export default Service
