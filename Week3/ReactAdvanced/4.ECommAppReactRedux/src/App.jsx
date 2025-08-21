import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path ='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/*' element={<div>404 Error Page Not Found</div>}></Route>
      </Routes>
    </div>
  )
}

export default App
