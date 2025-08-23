import React from 'react'

const FilterDropdown = ({ selectedGenre , setSelectedGenre }) => {

    const genres = ["All","Action","Comedy","Drama","Thriller","Horror","Sci-fi","Romance","Crime"];

    return (
        <div>
            <select
            value={selectedGenre}
            onChange={(e)=>setSelectedGenre(e.target.value)}
            className='px-4 py-2 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
                {genres.map((genre)=>(
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>    
        </div>
    )
}

export default FilterDropdown
