import React from 'react'
import Nav from '../components/Nav'
import { Route, Routes } from 'react-router-dom'
import Popular from '../pages/Popular'
import Upcoming from '../pages/Upcoming'
import Details from '../pages/Details'
import Search from '../pages/Search'

export default function Main() {
  return (
    <section>
    <Nav />
    <Routes>
      <Route index element={<Popular />}></Route>
      <Route path={"/upcoming"} element={<Upcoming /> } />
      <Route element={<Details />} path="/details/:id" />
      <Route element={<Search />} path='/search/:title' />
    </Routes>
    </section>
  )
}
