import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {

  const [genre, setGenre] = useState([]);
  const [artist, setArtist] = useState([]);
  const [album, setAlbum] = useState([]);
  const [track, setTrack] = useState([]);
  const [onloadGenre, setOnloadGenre] = useState(true)
  const params = useParams();
console.log(params)

  useEffect(() => {
    axios
    .get(`https://api.spotify.com/v1/recommendations/available-genre-seeds/${params}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
      },
    })
    .then((res) => res.data.genres)
    .then((data) => setGenre(data))
    setOnloadGenre(false)
  }, [params]);

  return (
    <div>
      {onloadGenre ? console.log('en chargement') 
      : genre.map((item) => <p key={item}>{item}</p>)}
    </div>
  )
}

export default SearchResults