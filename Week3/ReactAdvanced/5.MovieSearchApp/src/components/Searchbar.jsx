import React, { useState } from 'react'
import Spinner from './Spinner';
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({setMovies,setHasSearched}) => {
    const [query,setQuery]=useState("");
    const [loading ,setLoading] = useState(false);


    // const API_KEY=import.meta.env.VITE_OMDB_API_KEY;
    const BASE_URL = 'https://www.omdbapi.com/?apikey=2b25867b';

    const handleSearch= async (e)=> {
        e.preventDefault();
        if(!query) return;
        
        
        setLoading(true);

        try{
            const result = await fetch(`${BASE_URL}&s=${query}`);
            const data = await result.json();

            if(data.Response === "True"){
                const detailedMovies = await Promise.all(
                    data.Search.map(async(movie)=>{
                        const detailsRes=await fetch(`${BASE_URL}&i=${movie.imdbID}`);
                        return detailsRes.json();
                    })
                );
                setMovies(detailedMovies);
                setHasSearched(true);
            }
            else{
                setMovies([]);
                setHasSearched(true);
            }
        }
        catch(error){
            console.log("Error  fetching movies error");
        }
        setLoading(false);
    };

    const handleKeyDown = (event) =>{
        if(event.key === "Enter"){
            handleSearch();
        }
    };

    return (
        <div className='flex justify-center items-center gap-2 '>
            <input
                type='text'
                value={query}
                onChange={(event)=>setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Search your movies...'
                className='w-1/2 px-4 py-2 bg-slate-100 rounded-lg outline-none'
            />

            <button
            onClick={handleSearch}
            className='p-3 bg-slate-800 text-slate-100 rounded-lg hover:bg-slate-900 transition-all duration-300 flex items-center justify-center'
            >
                {
                    loading ? (<span className='animate-pulse'>...</span>) : (<FaSearch size={18} />)
                }
            </button>

            {
                loading && (
                    <div className='flex justify-center items-center h-full w-full'>
                        <Spinner/>
                    </div>
                )
            }
        </div>
    );
};

export default Searchbar
