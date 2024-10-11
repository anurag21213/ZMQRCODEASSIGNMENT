import React from 'react'


const TestCard = ({name,img,description,star,store}) => {
    

  return (
    <div className='bg-white rounded-lg mx-10 p-5 border w-[350px]'>
      <div className='flex items-center '>
        <img src={img}   className='h-[70px] w-[70px] rounded-sm '/>
        <div className='mx-5'>
            <h3 className='font-bold'>{name}</h3>
            <p className='text-green-500 '>{store}</p>
            <p>{star}</p>
        </div>
      </div>
      <div>
        <p className='text-slate-700'>{description}</p>
      </div>
    </div>
  )
}

export default TestCard
