import React from 'react'
import t from '../assets/images/bg.jpg'
import {motion} from 'framer-motion'

const Promo = () => {
  return (
    <div className='max-w[80%] mx-auto p-5'>
       <div className='p-5 flex items-center justify-center overflow-hidden'>
            <motion.div 

            initial={{x:+200,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.5}}
            
            className='bg-slate-900 text-white w-[80%] md:w-[40%] h-[90%] flex items-center justify-center flex-col p-5 gap-5 rounded-lg'>
                <h2 className=' text-3xl md:text-5xl'>Make Money, Risk-Free</h2>
                <p>You pay for fulfillment only when you make a sale</p>

                <div className='bg-black text-white rounded-lg  w-[300px] p-3 '>
                    <div className='border-b-2 border-b-white p-5'>
                        <p>You sell a shoes <span>$ 30</span></p>
                        <p>You pay for its production<span>$ 12</span></p>
                    </div>
                    <div className='p-5'>
                    <p className='text-green-500'>Your Profit<span>$ 18</span></p>
                    </div>
                    
                </div>

                <button className='h-[40px] w-[150px] p-2 font-semibold bg-green-500 text-white rounded-sm my-5'>Start Selling</button>
                <p >100% Free to use · 900+ Products · Largest print network</p>
            </motion.div>
            <img src={t} className='h-[600px] w-[50%] rounded-xl z-10 hidden md:block'/>
       </div>
    </div>
  )
}

export default Promo
