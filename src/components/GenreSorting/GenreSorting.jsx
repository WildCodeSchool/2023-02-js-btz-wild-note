import React, { useState, useEffect } from 'react';
import './GenreSorting.css';
import CardGenre from '../Card/CardGenre';
import axios from 'axios';


const GenreSorting = () => {


  const [genres, setGenres]=useState([]);
  const [onloadGenre, setOnloadGenre] = useState(true)

  useEffect(() => {
    axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
      headers: {
        Authorization:`Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
    .then((res)=> res.data.genres)
    .then((data) => setGenres(data))
    .catch(console.log)
    setOnloadGenre(false)
  },[])


  return (
    <div className='classbygenre'>
        <h2>GENRE</h2>
        <div className='cardgenre'>
        {onloadGenre ? console.log('en chargement') : genres.map((genre)=> <CardGenre key={genre} genre={genre}/>)}
        </div>
    </div>
  )
}

export default GenreSorting;