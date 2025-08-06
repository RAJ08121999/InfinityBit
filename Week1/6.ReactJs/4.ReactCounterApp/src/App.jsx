import React,{useState} from 'react'

function App() {

  const [count , setCount ]= useState(0);

  function negHandler(){
    setCount(count-1);
  }

  function posHandler(){
    setCount(count+1);
  }

  function resHandler(){
    setCount(0);
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-10 bg-[#344151]'>

      <div className='text-[#0398d4] font-medium text-2xl'>Increment & Decrement</div>

      <div className='bg-white flex justify-center gap-12 rounded-sm text-[25px] text-[#344151]'>

        <button onClick={negHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>

        <div className='font-bold gap-12 text-5xl'>{count} </div>

        <button onClick={posHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>

      </div>

      <div>
        <button onClick={resHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
          Reset
        </button>
      </div>
      
    </div>
  )
}

export default App;
