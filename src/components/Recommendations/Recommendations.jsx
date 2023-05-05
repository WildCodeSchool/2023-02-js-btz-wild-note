import React, { useState, useEffect } from 'react';
import './Recommendations.css';

const Recommendations = ({selecteGenres}) => {
  
  return (
    <div className='recommendations'>
      <div className='title'>
        <h2>RECOMMENDATIONS</h2>
      </div>
        
        <div className='recommendation-cards-container'>
          {selecteGenres.map((genre) => 
          <div key={genre} className='GenreCard'>
            <div className="Card-container">
            <span style={{backgroundColor: `hsl(${Math.random()*360}deg, 85%, 85% )`}}><h3 className='genre'>{genre}</h3></span>
            </div>
          </div>
            )}
        </div>
          
        
    </div>
  )
}

export default Recommendations