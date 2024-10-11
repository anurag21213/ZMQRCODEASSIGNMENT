import React from 'react'

import NavContextProvider from '../contextAPI/NavContext/NavContextProvider'
import Nav from '../components/Nav'
import Hero from './Hero'
import Service from './Service'
import Uses from './Uses'
import Create from './Create'
import Store from './Store'
import Testimonial from './Testimonial'
import Promo from './Promo'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <NavContextProvider>
            <Nav/>
        </NavContextProvider>

        <Hero/>
        
        <Service/>

        <Uses/>

        <Create/>

        <Store/>

       <Testimonial/> 

       <Promo/>

       <Footer/>
    </div>
  )
}

export default Home
