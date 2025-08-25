import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {

    const {gif,loading,fetchData}=useGif();

    return (
        <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>
                A Random Gif
            </h1>

            {
                loading 
                ? (<Spinner/>) 
                : (
                    <img src={gif} width="450" className='p-[20px]'/>
                )
            }

            
            <button onClick={()=>fetchData()}
            className='bg-blue-400 w-10/12 rounded-lg mb-[15px] font-bold text-lg py-1'
            >
                Generate
            </button>

        </div>
    )
}

export default Random
