import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function CardComponent({title,url}) {
  const[popularMovies, setPopularMovies] = useState([]);
  
  useEffect(() => {
    getPopularMovies();
  }, [])

  const getPopularMovies = async () => {
    const response  = await fetch(url);
    const data      = await response.json();
    setPopularMovies(data.results);
  }
  
  return (
    <section className='px-5 my-10'>
      <h1 className='text-5xl font-bold text-mono text-white'>{title}</h1>
      <div className='grid grid-cols-8 gap-3 mt-5'>
        {
          popularMovies.length && popularMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))
        }
      </div>
    </section>
  )
}
