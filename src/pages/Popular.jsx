import React from 'react'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent'

export default function Popular() {
  return (
    <>
      <Header />
      <CardComponent title="Popular Now" url="https://api.themoviedb.org/3/movie/popular?api_key=eec46cff1d2f106ddb78e0b6b62d041d&language=en-US" />
    </>
  )
}
