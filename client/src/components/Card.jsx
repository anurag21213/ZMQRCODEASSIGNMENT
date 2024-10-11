import React from 'react'

const Card = ({img,description,heading,style,headingStyle}) => {
  return (
    <div className='w-[350px] h-[300px] flex-col justify-center items-center md:justify-start md:items-start '>
        <img src={img} className={`${style} h-[160px] w-[160px]`} />
        <h2 className={`text-2xl font-semibold my-4 ${headingStyle}`}>{heading}</h2>
        <p className='text-slate-800 font-normal'>{description}</p>
    </div>
  )
}

export default Card
