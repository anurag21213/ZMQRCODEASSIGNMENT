import React, { useState } from 'react'
import Navcontext from './navContext'


const NavContextProvider = ({children}) => {
  const [open,setOpen]=useState(false)
  return (
    <Navcontext.Provider value={{open,setOpen}}>
      {children}
    </Navcontext.Provider>
  )
}

export default NavContextProvider
