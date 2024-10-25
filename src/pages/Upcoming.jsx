import React from 'react'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent'

export default function Upcoming() {
  return (
    <>
    <Header />
    <CardComponent title="Upcoming Movies" url="https://api.themoviedb.org/3/movie/upcoming?api_key=eec46cff1d2f106ddb78e0b6b62d041d&language=en-US" />
    </>
  )
}
