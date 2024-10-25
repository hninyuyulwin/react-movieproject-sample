import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Nav() {
  const[searchKey,setSearchKey] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`)
  }
  return (
    <nav className='flex items-center justify-between bg-black text-white px-10 py-4'>
      <NavLink to={"/"} className='text-3xl font-bold font-mono'>URMV</NavLink>
      <div className='flex items-center '>
        <NavLink to={"/"} className={({isActive}) => (isActive ? 'active-text' : 'none-active-text')} >Popular</NavLink>
        <NavLink to={"/upcoming"} className={({isActive}) => (isActive ? 'active-text' : 'none-active-text')}  >Upcoming</NavLink>
      </div>
      <form action="" className='flex items-center justify-center' onSubmit={search}>
        <input type="text" name="" className='text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
        <button type='submit'>
        <MagnifyingGlassIcon className='w-8 h-8' />
        </button>
      </form>
    </nav>
  )
}
