import React from 'react';
import Favorites from '../components/Favorites/Favorites';
import Playlists from '../components/Playlists/Playlists';
import './Library.css'
import Navbar from '../components/navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';

const Library = () => {
  return (
    <div className='library'>
        <SearchBar/>
        <Favorites />
        <Playlists />
        <Navbar />
    </div>
  )
}

export default Library