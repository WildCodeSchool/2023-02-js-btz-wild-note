import React from 'react';
import './Favorites.css'


const Favorites = () => {
  return (
    <div className='favorites-container'>
        <h2>MY FAVORITES</h2>
        <div className='favorites'>
            <button className='artists'>Artistes</button>
            <button className='albums'>Albums</button>
        </div>
    </div>
  )
}

export default Favorites