import React, { useState } from 'react';
import './FavoriteButton.css';
import { BsFillHeartFill } from 'react-icons/bs'

const FavoriteButton = () => {

  const [favorite, setFavorite] = useState(false);

  const addFavorite = () => {
    setFavorite(!favorite);
  }

  // const favorites = localStorage.setItems('favorite', JSON.stringify(favorite));

  return (
    <BsFillHeartFill style={{ width: '2.5em', height: '2.5em' }} color={favorite ? "var(--secondary-color)" : "var(--dark-font)"} onClick={addFavorite} />
  )
}

export default FavoriteButton;