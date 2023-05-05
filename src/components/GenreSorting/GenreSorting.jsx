import React, { useState, useEffect } from 'react';
import './GenreSorting.css';
import CardGenre from '../Card/CardGenre';
import axios from 'axios';
import { Link } from 'react-router-dom';


const GenreSorting = () => {


  const [genres, setGenres]=useState([]);


  useEffect(() => {
    axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
      headers: {
        Authorization:`Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
    .then((res)=> res.data.genres)
    .then((data) => setGenres(data))
    .catch(console.log)
  },[])


  return (
    <div className='genre-container'>
        <h2>GENRE</h2>
        <div className='cardgenre'>
        {genres.map((genre)=> <Link key={`${genre}-link`} to={'/search/genre'}><CardGenre key={genre} genre={genre}/></Link>)}
        </div>
    </div>
  )
}

export default GenreSorting;