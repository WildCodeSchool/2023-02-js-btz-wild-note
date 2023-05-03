import React from 'react'
import './CardGenre.css'


const CardGenre = ({genre}) => {
    return (
        <div className='CardGenre'>
            <div className='CardGenre-container'>
              <span style={{backgroundColor: `hsl(${Math.random()*360}deg, 50%, 80% )`}}><h3 className='genre'>{genre}</h3></span>
              
            </div>
        </div>
    )
}

export default CardGenre;