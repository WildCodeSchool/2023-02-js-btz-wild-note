import React, { useState } from 'react';
import './FavoriteButton.css';
import { BsFillHeartFill } from 'react-icons/bs'

const FavoriteButton = ({track, favoriteTrack, setFavoriteTrack}) => {

  const [favorite, setFavorite] = useState(false);

  const addFavorite = () => {
    setFavorite(!favorite);
    setFavoriteTrack([...favoriteTrack, track])
  }

  // const favorites = localStorage.setItems('favorite', JSON.stringify(favorite));

  return (
    <BsFillHeartFill color={favorite ? "var(--secondary-color)" : "var(--dark-font)"} onClick={addFavorite} />
  )
}

export default FavoriteButton;