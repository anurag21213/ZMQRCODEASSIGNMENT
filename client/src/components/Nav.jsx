import React, { useContext } from 'react'
import MobileNav from './MobileNav'
import Navbar from './Navbar'
// import NavContext from '../contextAPI/NavContext'
import Navcontext from '../contextAPI/NavContext/navContext'

const Nav = () => {

    const {open}=useContext(Navcontext)

  return (
    <>
        {
            open&&<MobileNav/>
        }
        

        <Navbar/>
    </>
  )
}

export default Nav
