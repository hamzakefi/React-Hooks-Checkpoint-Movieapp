import React from 'react'
import Moviecard from './Moviecard'
import '../component/Movielist.css'
import { moviesData } from './Data/Data'
const Movieliste = ({Movies,inputSerch} ) => {
  return (
    <div className='Movielist'>
    {    Movies
    .filter(Movie => Movie.title.toUpperCase().includes(inputSerch.toUpperCase())  ) 
    .map(Movie => < Moviecard Movie={Movie} key={Movie.id} /> ) }
    </div>
  )
}

export default Movieliste