import React from 'react'
import './CardGenre.css'

const CardGenre = ({ genres}) => {
    return (
        <div className='CardGenre'>
            <div className='CardGenre-container'>
                <span></span>
                <h3 className='genre'>{genres.genre}</h3>
            </div>

        </div>
    )
}

export default CardGenre;