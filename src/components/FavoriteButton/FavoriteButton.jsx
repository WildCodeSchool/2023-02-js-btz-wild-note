
import React, { useState, useEffect } from 'react';

import './FavoriteButton.css';
import { BsFillHeartFill } from 'react-icons/bs'

/* albums, tracks, artists */
const FavoriteButton = ({type, id}) => {

  let favs = []

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    favs = JSON.parse(localStorage.getItem(type) || "[]");
    setFavorite(favs.includes(id))

  }, [id])

  const addFavorite = () => {
    if (!favorite ) {
      favs.push(id)
    } else {
      favs = favs.filter(item => item !== id)
    }
    localStorage.setItem(type, JSON.stringify(favs)) 
    setFavorite(!favorite);
  }


  return (
    <BsFillHeartFill color={favorite ? "var(--secondary-color)" : "var(--dark-font)"} onClick={addFavorite} style={{width: '100%', height: '100%'}}/>
  )
}

export default FavoriteButton;