import { PlayIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({movie}) {
  return (
    <Link to={`/details/${movie.id}`} className='rounded-lg overflow-hidden relative'>
      <img className='w-1/2' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
      <div className='dark-ov'></div>
      <PlayIcon className='play-ic' />
    </Link>
  )
}
