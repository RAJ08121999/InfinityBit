import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ( { movies , allMovies , selectedGenre, hasSearched } ) => {

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


      console.log("MOvies to display ",displayMovies);

      if(!displayMovies || displayMovies.length === 0){
        return <p className='text-center text-white text-xl'>No Movies Found</p>;
      }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
      {displayMovies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
