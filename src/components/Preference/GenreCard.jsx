import React, { useState } from 'react'
import './GenreCard.css'


const GenreCard = ({genre, selectedGenres, setSelectedGenres}) => {

    const [selected, setSelected] = useState(false)

    const handleSelect = () => {
        setSelected(!selected)
        setSelectedGenres([...selectedGenres, genre])
    }
    
    return (
        <div className='GenreCard'>
            <div className={!selected ? "Card-container" : "Card-container selected"} onClick={handleSelect}>
              <span></span>
            <h3 className='genre'>{genre}</h3>  
            </div>
        </div>
    )
}

export default GenreCard;