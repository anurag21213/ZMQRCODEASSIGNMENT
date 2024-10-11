import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faLinkedin,faYoutube,faXTwitter} from "@fortawesome/free-brands-svg-icons"
import { footer } from '../database/footerData'
import Fcard from './Fcard'

const Footer = () => {
  return (
    <footer className='max-w-[80%] mx-auto'>
        <div className='flex items-center justify-between text-4xl flex-wrap'>
            <h1 className='text-green-500 font-bold my-5'>Shoes</h1>
            <div className='text-green-500 flex items-center justify-between gap-4 my-5'>
               <FontAwesomeIcon icon={faFacebook} className='roundef-full'/>
               <FontAwesomeIcon icon={faInstagram} className='roundef-full'/>
               <FontAwesomeIcon icon={faLinkedin} className='roundef-full'/>
               <FontAwesomeIcon icon={faYoutube} className='roundef-full'/>
               <FontAwesomeIcon icon={faXTwitter} className='roundef-full'/>
            </div>
        </div>

        <div className='flex items-start justify-between w-full flex-wrap'>
            {
                footer.map((item)=><Fcard key={item.heading} heading={item.heading} data={item.data} />)
            }
        
        </div>
    </footer>
  )
}

export default Footer
