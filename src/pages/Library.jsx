import React from 'react';
import Favorites from '../components/Favorites/Favorites';
import Playlists from '../components/Playlists/Playlists';
import './Library.css'


const Library = () => {
  return (
    <div className='library'>
        <Favorites />
        <Playlists />
    </div>
  )
}

export default Library