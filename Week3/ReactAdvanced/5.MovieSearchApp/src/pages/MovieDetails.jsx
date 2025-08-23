import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';


const BASE_URL = 'https://www.omdbapi.com/?apikey=2b25867b';

const MovieDetails = () => {

    const { id } = useParams();
    const [movie,setMovie] = useState(null);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        const fetchMovieDetails = async () =>{
            
            try{
                setLoading(true);
                const response = await fetch(`${BASE_URL}&i=${id}`);
                const data = await response.json();
                if(data.Response === "True"){
                    setMovie(data);
                }
            }
            catch(error){
                console.log("Error in fetching movies details");
            }
            setLoading(false);
        };
        fetchMovieDetails();

    },[id]);

    if(loading){
        return(
            <div className='flex justify-center items-center min-h-screen w-full'>
            <Spinner/>
        </div>
        )
    }

    if(!movie){
        return <p className='text-center text-red-500 text-xl'> Movie not found</p>
    }
    return (
        <div className="max-w-4xl mx-auto bg-slate-400 rounded-lg shadow-xl p-6">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
                alt={movie.Title}
                className="w-64 h-auto rounded-lg"
                />
                <div>
                    <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
                    <p className="text-gray-600">Relaesed on {movie.Year}<br/> Runtime {movie.Runtime}</p>
                    <p className="text-gray-800 mt-2"><strong>Genre:</strong> {movie.Genre}</p>
                    <p className="text-gray-800"><strong>Director:</strong> {movie.Director}</p>
                    <p className="text-gray-800"><strong>Actors:</strong> {movie.Actors}</p>
                    <p className="text-gray-800 mt-4"><strong>Plot:</strong> {movie.Plot}</p>
                    <p className="text-gray-800 mt-4"><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>

                    <NavLink
                        to="/"
                        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Back to Home
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails
