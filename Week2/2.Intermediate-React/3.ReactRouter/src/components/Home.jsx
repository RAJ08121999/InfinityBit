import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function clickHandler (){
    // move to labs
    navigate("/labs");
  }
  return (
    <div>
      <div className='text-center mt-5'>
      <Outlet/>
      This is home page
    </div>
    <button onClick={clickHandler} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Move to Labs</button>
    </div>
  )
}

export default Home
