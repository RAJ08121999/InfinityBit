import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (

    <div className='w-screen h-screen bg-slate-950 flex flex-col'>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path='/' element= {<Home isLoggedIn={isLoggedIn}/>}></Route>

        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>

        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>

        <Route path='/dashboard' element={

          // adding condition that only a user who logged in successfully can go to dashboard that's why its route is added in a private route
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        
        }></Route>
        
        <Route path='*' element={<div>Page Not Found 404 Error</div>}></Route>

      </Routes>

    </div>

  )
}

export default App
