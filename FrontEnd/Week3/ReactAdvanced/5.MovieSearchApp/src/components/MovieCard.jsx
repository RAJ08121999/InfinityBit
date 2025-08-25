import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCard = ({movie}) => {

    const poster = movie.Poster && movie.Poster!== 'N/A' 
    ? movie.Poster 
    : "https://shorturl.at/F8nUh";

    return (
        <div className='bg-slate-300 rounded-xl overflow-hidden  transition-all duration-300 flex flex-col hover:scale-110 hover:shadow-2xl h-full w-[300px]'>
            <img
                src={poster}
                alt={movie.Title || "No Title"}
                className='w-full h-[350px] object-cover rounded-md'
            />

            <div className='p-2 flex-col'>
                <h2 className='text-lg font-bold'>{movie.Title}</h2>
                <p className='text-gray-600 mb-1'>{movie.Year}</p>

                <div className='mt-auto'>
                    <NavLink
                        to={`/movie/${movie.imdbID}`}
                        className='inline-block  px-3 py-1 bg-slate-800 text-white rounded hover:bg-blue-700 transition-all duration-300'
                        >
                            Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MovieCard
