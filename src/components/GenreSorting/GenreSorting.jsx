import React from 'react';
import './GenreSorting.css';
import CardGenre from '../Card/CardGenre';


const GenreSorting = ({music}) => {


  return (
    <div className='classbygenre'>
        <h2>BY GENRE</h2>
        <div className='cardgenre'>
        {music &&
        music.map((music)=>(<CardGenre key={music.id} music={music}/>))}
        </div>
</div>
  )
}

export default GenreSorting;