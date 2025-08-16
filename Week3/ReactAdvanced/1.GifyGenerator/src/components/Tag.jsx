import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {

    
    const [tag,setTag]=useState('car');

    const{gif,loading,fetchData}=useGif(tag);
    

    return (

        <div className='w-1/2 bg-blue-700 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[15px]'>

            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>
                Random {tag} Gif
            </h1>

            {
                loading 
                ? (<Spinner/>) 
                : (
                    <img src={gif} width="450" className='p-[20px]'/>
                )
            }

            <input
                className='w-10/12 rounded-lg mb-[2px] font-bold text-lg py-1 text-center'
                value={tag}
                onChange={(event)=>setTag(event.target.value)}
            />
            
            <button onClick={()=>fetchData(tag)}
            className='bg-blue-400 w-10/12 rounded-lg mb-[15px] font-bold text-lg py-1'>
                Generate
            </button>

        </div>
    )
}

export default Tag

