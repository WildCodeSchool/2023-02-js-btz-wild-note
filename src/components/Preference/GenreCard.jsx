import React, { useState } from 'react'
import './GenreCard.css'


const GenreCard = ({genre}) => {

    const [selected, setSelected] = useState(true)
    const recommendationGenre = [];

    const handleSelect = () => {
        setSelected(!selected)
    }

    return (
        <div className='GenreCard'>
            <div className={selected ? "Card-container" : "Card-container selected"} onClick={handleSelect}>
              <span></span>
            <h3 className='genre'>{genre}</h3>  
            </div>
        </div>
    )
}

export default GenreCard;