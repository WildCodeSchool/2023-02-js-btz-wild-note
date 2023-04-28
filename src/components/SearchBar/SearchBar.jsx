import { React, useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import "./SearchBar.css";
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';



const SearchBar = () => {

  const [search, setSearch] = useState('');
  console.log(search);


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
    .then((res) => setSearch(res.data.artists.items))
    setOnloadGenre(false)
  }, []);

  return (
    <div className='SearchBar'>
      <div className='logo-search'><IoIosSearch style={{ fill: "#bebebe", border: "none", height: '1.5em', width: '1.5em'}} /></div>
      <input
        className="SearchText"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)

        }}
        placeholder="Search by title ..."

      />
      <Link to={`/search/${search}`}><FaPaperPlane className='btn-send'/></Link>

    </div>
  )
}

export default SearchBar;