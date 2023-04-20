import React, { useState } from 'react';
import './FavoriteButton.css';
import {AiTwotoneHeart} from 'react-icons/ai';

const FavoriteButton = () => {

    const [favorite, setFavorite] = useState(false);

    const addFavorite = () => {
        setFavorite(!favorite);
    }

    // const favorites = localStorage.setItems('favorite', JSON.stringify(favorite));

  return (
    <button><AiTwotoneHeart color={favorite ? "var(--secondary-color)" : "var(--dark-font)"} onClick={addFavorite}/></button>
  )
}

export default FavoriteButton;