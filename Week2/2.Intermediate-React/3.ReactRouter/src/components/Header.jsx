import React from 'react';
import { Outlet } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-center mt-5'>
      <Outlet/>
      {/* This is home page */}
    </div>
  )
}

export default Header
