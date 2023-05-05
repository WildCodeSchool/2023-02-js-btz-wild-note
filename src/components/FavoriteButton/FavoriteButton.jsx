import React, { useMemo, useState } from 'react';
import './FavoriteButton.css';
import { BsFillHeartFill } from 'react-icons/bs'

const FavoriteButton = ({track, favoriteTrack, setFavoriteTrack}) => {

  const [favorite, setFavorite] = useState(false);

  const addFavorite = () => {
    setFavorite(!favorite);
  }

  // const favoritesTracks = useMemo(() => {

  // }, [favoriteTrack])

  // const favorites = localStorage.setItems('favorite', JSON.stringify(favorite));

  return (
    <BsFillHeartFill color={favorite ? "var(--secondary-color)" : "var(--dark-font)"} onClick={addFavorite} style={{width: '100%', height: '100%'}}/>
  )
}

export default FavoriteButton;