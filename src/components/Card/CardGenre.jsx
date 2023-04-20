import React from 'react'
import './CardGenre.css'
import CardAlbum from '../../components/Card/CardAlbum';

const CardGenre = ({music}) => {



    return (
        <div className='CardGenre'>
            <div className='CardGenre-container'>
                <span></span>
                <h3 className='genre'>{music.genre}</h3>
            </div>

        </div>
    )
}

export default CardGenre;