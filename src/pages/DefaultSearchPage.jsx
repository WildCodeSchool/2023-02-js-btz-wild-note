import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CardGenre from '../components/Card/CardGenre';
import Historic from '../components/Historic/Historic';
import './DefaultSearchPage.css';
import axios from 'axios';

const DefaultSearchPage = () => {
    const [genres, setGenres]=useState([])

    useEffect(()=>{
      axios
      .get('https://run.mocky.io/v3/5bac33a7-3cd6-491e-8310-64175716f913')
      .then((res)=>setGenres(res.data.musique))
    },[])

  return (
    <div className='default-searchpage'>
      <SearchBar />
      <Historic />
      <div className='classbygenre'>
          <h2>BY GENRE</h2>
          <div className='cardgenre'>
            {genres &&
            genres.map((genres)=>(<CardGenre key={genres.id} genres={genres}/>))}
          </div>
      </div>
  </div>
  )
}

export default DefaultSearchPage;