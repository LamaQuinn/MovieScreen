import React from 'react';


const MovieCard = ({movie,addMovie,removeMovie,watchlist})=> {
 const inWatchlist = watchlist ? watchlist.filter((mov) => mov.id == movie.id) : [];


 const button =
inWatchlist.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button>
) : (
    <button onClick={() => removeMovie(movie)}>Remove</button>
);
    return (
      <div className='movie-card'>
        <div className='movies'>
        <h3>{movie.original_title}</h3>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            
        </div>

     {button}
       
        </div>
    )
  
}

export default MovieCard;