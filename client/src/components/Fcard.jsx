import React from 'react'

const Fcard = ({heading,data}) => {
  return (
    <div className='m-4 p-4'>
        <h1 className='text-2xl font-bold'>{heading}</h1>

        <ul className='text-slate-800 font-medium text-sm'>
            {
                data.map((item)=><li key={item}>{item}</li>)
            }
        </ul>
    </div>
  )
}

export default Fcard
