import React from 'react'
import './CardGenre.css'


const CardGenre = ({genre}) => {


    return (
        <div className='CardGenre'>
            <div className='CardGenre-container'>
                <span></span>
                <h3 className='genre'>{genre}</h3>
            </div>

        </div>
    )
}

export default CardGenre;