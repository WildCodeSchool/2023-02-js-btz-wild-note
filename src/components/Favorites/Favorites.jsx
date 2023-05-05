import React from 'react';
import {Link} from 'react-router-dom';
import './Favorites.css'


const Favorites = () => {

  return (
    <div className='favorites-container'>
        <h2>MY FAVORITES</h2>
        <div className='favorites'>
            <Link to="/library/favorite-artists"><button className='artists'>Artistes</button></Link>
            <Link to="/library/favorite-albums"><button className='albums'>Albums</button></Link>
        </div>
    </div>
  )
}

export default Favorites