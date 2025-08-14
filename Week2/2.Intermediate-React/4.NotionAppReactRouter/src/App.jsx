import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (

    <div>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path='/' element= {<Home/>}></Route>

        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>

        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>

        <Route path='/dashboard' element={<Dashboard/>}></Route>
        
        <Route path='*' element={<div>Page Not Found 404 Error</div>}></Route>

      </Routes>

    </div>

  )
}

export default App
