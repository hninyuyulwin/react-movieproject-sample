import { PlayCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderCart({movie}) {
  return (
    <div className='w-full h-screen relative'>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className='w-full h-full object-cover' />

      <div className='dark-ov'>
      </div>
      <div className='text-box'>
        <h1 className='text-5xl font-extra-bold mb-1'>{movie.title}</h1>
        <p className='text-lg font-medium mb-4'>{movie.overview} </p>
        <NavLink to={`/details/${movie.id}`} className='bg-white text-black px-3 py-2 rounded-md font-medium text-lg'>
          <PlayCircleIcon className='w-6 h-6 inline-block m-0 me-2' />
          Watch Now
        </NavLink>
      </div>
    </div>
  )
}
