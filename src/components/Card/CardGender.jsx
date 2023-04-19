import React from 'react'
import './CardGender.css'

const CardGender = ({ musics}) => {
    return (
        <div className='CardGender'>
            <div className='CardGender-container'>
                <span></span>
                <h3 className='gender'>{musics.genre}</h3>
            </div>

        </div>
    )
}

export default CardGender