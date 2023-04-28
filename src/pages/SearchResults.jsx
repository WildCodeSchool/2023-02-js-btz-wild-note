import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import axios from 'axios';

const SearchResults = () => {

  const [searchResult, setSearchResult] = useState([]);

  const [genre, setGenre] = useState([]);
  const [artists, setArtists] = useState('');
  const [album, setAlbum] = useState([]);
  const [track, setTrack] = useState([]);
  const [onloadGenre, setOnloadGenre] = useState(true)

  useEffect(() => {
    axios
    .get(`https://api.spotify.com/v1/search?q=${artists}&type=artist`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
      },
    })
    .then((res) => console.log(setSearchResult(res.data.artists.items)))
    setOnloadGenre(false)
  }, []);

  return (
    <div>
      {onloadGenre ? console.log('en chargement') 
      : searchResult.map((artist) => {<p key={artist.id}>{artist.name}</p> })
    }
    </div>
  )
}

export default SearchResults