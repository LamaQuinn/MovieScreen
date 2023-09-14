import React from 'react';
import MovieCard from "./MovieCard";

function WatchList({watchlist,addMovie,removeMovie}) {
 
    const movieDisplay = watchlist.map((movie,index)=>{

        return <MovieCard key={index} addMovie={addMovie} movie={movie} removeMovie={removeMovie} watchlist={watchlist} />
        
    });
  return (
    <div className='watchlist'>
        <h1>My WatchList</h1>
        <div className="movie-container">
            {movieDisplay}
   
        </div>
        </div>
  )
}
export default WatchList;
