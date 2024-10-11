import React from 'react'
import { connections } from '../database/store'
import Scard from '../components/Scard'

const Store = () => {
    return (
        <div className='max-w-[80%] mx-auto flex items-center justify-center flex-col'>
            <div className=''>
                <h1 className='text-4xl font-bold mx-auto'>Connect your store</h1>
                <p className='text-slate-700 my-2'>Printify easily integrates with major e-commerce platforms and marketplaces</p>

            </div>

            <div><div className='w-full flex justify-center items-center p-4 flex-wrap gap-5'>
                {
                    connections.map((item) => {
                        return <Scard
                            key={item.name}
                            name={item.name}
                            styles={item.style}
                            description={item.description}
                        />
                    })
                }
            </div></div>

            <div className='w-full p-4 bg-green-300 flex justify-between items-center text-white h-[200px] md:h-[100px] rounded-lg my-20'>
                <div className='w-[70%] flex justify-between items-center mx-auto flex-wrap'>
                <h1>Are you a large business looking for custom solutions?</h1>
                <button className='bg-white rounded-md w-[180px] my-2 md:my-0 md:w-[150px] h-[40px] text-black'>Talk to Sales</button>
                </div>
                
            </div>

        </div>
    )
}

export default Store
