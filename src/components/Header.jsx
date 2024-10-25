import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCart from './HeaderCart';

export default function Header() {
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    getRelatedMovies();
  }, []);

  const getRelatedMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=eec46cff1d2f106ddb78e0b6b62d041d&language=en-US");
    const data = await response.json();
    console.log(data);
    
    setRelatedMovies(data.results);
  };
  
  return (
    <section className='w-full h-screen '>
        <Splide options={{ type : "loop",arrows : false, autoplay:true, interval:2000 }} aria-label="My Favorite Images">
          {relatedMovies.map((movie) => (
            <SplideSlide key={movie.id}>
              <HeaderCart movie={movie} />
            </SplideSlide>
          ))}
          
        </Splide>
        
    </section>
  )
}
