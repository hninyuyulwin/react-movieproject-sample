import { PlayIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
  const {id} = useParams()
  const [movie,setMovie] = useState({});

  useEffect(()=>{
    getMovieById();
  },[id])

  const getMovieById = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eec46cff1d2f106ddb78e0b6b62d041d&language=en-US`);
    const data = await response.json();
    console.log(data);
    setMovie(data);
  }

  return (
    <>
      {movie && ( <section className='w-full h-screen relative'> 
        <div className='h-2/3 relative'>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.id} srcset="" /> 
          <div className='dark-ov'></div>
        </div>

        <div className='detail-container'>
          <img className='w-60 rounded-md' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.id} />
          
          <div className='ms-4 text-white'>
            <h1 className='text-4xl font-semibold'>{movie.original_title}</h1>
            <p className='text-md font-medium'><span className='text-red-500'>Duration : </span><i>{movie.runtime} mins</i></p>
            <p className='text-md font-medium mb-3'><span className='text-red-500'>Release Date : </span><i>{movie.release_date}</i></p>
            
            {movie.genres && movie.genres.map((genre) => (
              <span key={genre.id} className='bg-red-500 px-2 py-2 rounded-xl font-bold me-1'>{genre.name}</span>
            ))}
            <h4 className='text-md my-4'>{movie.overview}</h4>  
            
            <Link to={movie.homepage} className='font-bold text-lg px-2 py-2 rounded-md border-2 border-red-800 hover:bg-red-800'>
              <PlayIcon className='w-6 h-6 text-red-800  inline-block mb-1' />
              Watch Now
            </Link>
          </div>
        </div>
      </section>)}
    </>
  )
}
 
export default Details