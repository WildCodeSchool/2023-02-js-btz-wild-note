import React, { useState, useEffect } from 'react';
import './GenreSorting.css';
import CardGenre from '../Card/CardGenre';
import axios from 'axios';


const GenreSorting = () => {


  const [genres, setGenres]=useState([])

  useEffect(()=>{
    axios
    .get('https://run.mocky.io/v3/5bac33a7-3cd6-491e-8310-64175716f913')
    .then((res)=>{
      let genresArray = [];
      (res.data.musique).forEach(music => {
        if (!genresArray.includes(music.genre)){
        genresArray.push(music.genre)
        }
      });
      setGenres(genresArray);
    })
  },[])
  console.log(genres)

  return (
    <div className='classbygenre'>
        <h2>BY GENRE</h2>
        <div className='cardgenre'>
        {genres &&
        genres.map((genre, index)=>(<CardGenre key={`${genre}-${index}`} genre={genre}/>))}
        </div>
</div>
  )
}

export default GenreSorting;