import React from 'react'
import './CardGenre.css'


const CardGenre = ({genre}) => {
    return (
        <div className='CardGenre'>
            <h3 className='genre'>{genre}</h3>
        </div>
    )
}

export default CardGenre;