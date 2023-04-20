import React from 'react'

const CardAlbum = ({musics}) => {

  return (
    <div className='CardAlbum'>
        <img src={musics.albumCover} alt={musics.titre}/>
        <div>{musics.album} </div>
        <div>{musics.artiste}</div>
        <div>{musics.annee}</div>
    </div>
  )
}

export default CardAlbum