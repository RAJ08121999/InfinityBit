import React, { useState } from 'react'
import MovieCard from './MovieCard';

const MovieList = ( { movies , allMovies , selectedGenre, hasSearched , fetchMovieDetails } ) => {

  const [selectedMovie , setSelectedMovie ] = useState(null);

  let displayMovies;

  if (hasSearched) {
    displayMovies = movies;
  } 
  else {
    displayMovies =
    selectedGenre === "All"
    ? allMovies
    : allMovies.filter((movie) =>
      movie.Genre && movie.Genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
  }

  const handleDetailsClick = async (imdbID) => {
    const details = await fetchMovieDetails(imdbID);
    setSelectedMovie(details);
  };


      console.log("Movies to display ",displayMovies);

      if(!displayMovies || displayMovies.length === 0){
        return <p className='text-center text-white text-xl'>No Movies Found</p>;
      }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {displayMovies.map((movie) => (
        <MovieCard 
        key={movie.imdbID}
        movie={movie}
        onDetailsClick={()=>handleDetailsClick(movie.imdbID)}
        />
      ))}
    </div>
  )
}

export default MovieList
