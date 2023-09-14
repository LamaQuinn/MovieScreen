import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({ movieList,addMovie,removeMovie,currentPage,setCurrentPage }) =>{

const decrement=()=>{
    
        setCurrentPage(currentPage - 1);
    
}
const increment=()=>{
    setCurrentPage(currentPage + 1);
}

const isPreviousButtonDisabled = currentPage === 1;

    const movieDisplay=movieList.map((movie,index)=>{
        return <MovieCard key={index} movie={movie} addMovie={addMovie} removeMovie={removeMovie} />
    });
    return (
        <div className="page">
        <h1>Laman's Movie Theatre</h1>
        <h3>Add a movie to your watchlist</h3>
        <div className="btn-container">
        <button onClick={currentPage !== 1 && decrement} disabled={isPreviousButtonDisabled}>Previous</button>
        <button onClick={increment}>Next</button>
        </div>
        <div className="movie-container">
            {movieDisplay}
    
        </div>
        </div>
    );
}



export default MovieScreen;