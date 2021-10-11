import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movie,setMovie] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  
  async function fetchMovie(){
    setLoading(true)
    setError(null)
    try{
      const response = await fetch("https://swapi.dev/api/films/")
      if(!response.ok){
        throw new Error("Something went wrong");
      }
      const data = await response.json()
  
      setMovie(data.results.map((d)=>{
        return {
          id : d.episode_id,
          title : d.title,
          openingText : d.opening_crawl,
          releaseDate : d.release_date
        }
      }))
    }catch(e){
      setError(e.message)
    }
    setLoading(false)
  }

  let message = <p></p>

  if(movie.length===0){
    message = <p>movie not found</p>
  }
  if(error){
    message = <p>{error}</p>
  }
  if(loading){
    message = <p>loading</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {message}
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
