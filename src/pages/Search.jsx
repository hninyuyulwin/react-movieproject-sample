import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

export default function Search() {
  const {title} = useParams();
  const [searchedMovies, setSearchedMovies] = useState([])
  
  useEffect(() => {
    getSearchMovie();
  },[title])

  const getSearchMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eec46cff1d2f106ddb78e0b6b62d041d&language=en-US&query=${title}&page=1&include_adult=false`);
    const data = await response.json();
    setSearchedMovies(data.results);
  }

  return (
    <section className='px-5 my-10'>
      <h1 className='text-5xl font-bold text-mono text-white'>{title}</h1>
      <div className='grid grid-cols-8 gap-3 mt-5'>
        {
          searchedMovies.length && searchedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))
        }
      </div>
    </section>
  )
}
