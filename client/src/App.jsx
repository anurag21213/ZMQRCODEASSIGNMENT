import Home from './pages/Home'

import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Explore from './pages/Explore'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' Component={Home}  />
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={SignUp}/>
      <Route path='/explore' Component={Explore}/>
      
      </Routes>
    </>
  )
}

export default App
