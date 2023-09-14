import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import WatchList from './components/WatchList';

 function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const addMovie=(movie)=>setWatchlist([...watchlist,movie])
  const removeMovie=(movie)=>{
    const newState=watchlist.filter((mov)=>{
      return mov.id!==movie.id
    })
    setWatchlist(newState)
  }
  useEffect(()=>{
    getData()
  },[currentPage,watchlist]);

  const getData = () =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`)
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
  });
  }
 

  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen
            addMovie={addMovie}
            movieList={movieList}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            watchlist={watchlist}
           
            

        
        />
        <WatchList   
        watchlist={watchlist}
        addMovie={addMovie}
        removeMovie={removeMovie}
        />
      </main>
    </div>
  );
}

export default App;
