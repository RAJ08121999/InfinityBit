import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigation = useNavigate();
  function clickHandler(){
    //go back
    navigation(-1);

  }
  return (
    <div>
      <div className='text-center mt-5'>
        This is Lab Page
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={clickHandler}>GO Back</button>
    </div>
  )
}

export default Labs
