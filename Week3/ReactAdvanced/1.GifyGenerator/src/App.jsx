import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'


const App = () => {
  return (
    <div className='background w-screen flex flex-col items-center'>

      <h1 className='w-11/12 bg-blue-400 rounded-lg text-center text-4xl font-bold mt-[20px] px-10 py-2'>
        RANDOM GIFS
      </h1>

      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>

        <Random/>

        <Tag/>

      </div>

    </div>
  )
}

export default App


// API KEY VMlPcsBlrq9yxRqsezJA0wsSUD1T2hjY