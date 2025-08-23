import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar';
import FilterDropdown from '../components/FilterDropdown';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';

const BASE_URL = 'http://www.omdbapi.com/?apikey=2b25867b';

const Home = () => {
    const [allMovies , setAllMovies ] = useState([]);
    const [ movies , setMovies ]= useState([]);
    const [ selectedGenre , setSelectedGenre ]= useState("All");
    const [ hasSearched , setHasSearched ] = useState(false);
    const [ loading , setLoading ] = useState(false);


    useEffect(()=>{
        const fetchAllMovies = async () => {
            try{
                setLoading(true);
                
                
                    const response = await fetch(`${BASE_URL}&s=joker&type=movie`);
                    const data = await response.json();
                    // console.log("fetched data ",term,data);
                

                if(data.Response === "True"){
                    const detailedMovies = await Promise.all(
                        data.Search.map(async (movie)=>{
                            const detailsRes = await fetch(`${BASE_URL}&i=${movie.imdbID}`);
                            return detailsRes.json();
                        })
                    );
                    setAllMovies(detailedMovies);
                    setMovies(detailedMovies);
                }
            }catch (error){
                console.log("Error fetching default movies");
            }
            setLoading(false);
        };
        fetchAllMovies();
        
    },[])

    return (
        <div className='flex flex-col gap-6'>
            
        <div className='flex flex-col md:flex-row justify-center gap-2'>

            <Searchbar setMovies={setMovies} setHasSearched={setHasSearched} />
            
            <FilterDropdown selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />

        </div>
        {
            loading 
            ? (<div className='flex items-center justify-center min-h-screen w-full'>
                <Spinner/>
            </div>)
            :(
                <MovieList 
                    movies={movies} 
                    allMovies={allMovies}
                    selectedGenre={selectedGenre} 
                    hasSearched={hasSearched} />
            )
        }
        

        </div>
    );

}

export default Home
