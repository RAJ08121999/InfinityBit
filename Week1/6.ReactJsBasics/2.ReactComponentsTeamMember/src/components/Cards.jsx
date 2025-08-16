import React from 'react'

function Cards({img , name}) {
    return (
    <div className='h-[300px] w-[300px] mx-auto border rounded-[20px] '>

        <img src= {img} className='h-full w-full bg-cover rounded-[20px]'/>

        <p className='bg-gray-400 text-xl text-center font-bold rounded-[20px] mt-2 '>{name}</p>
    </div>
    )
}

export default Cards
