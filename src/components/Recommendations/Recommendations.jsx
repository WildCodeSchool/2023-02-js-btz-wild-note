import React, { useState, useEffect } from 'react';
import './Recommendations.css';

const Recommendations = ({selecteGenres}) => {
  
  return (
    <div className='recommendations'>
      <div className='title'>
        <h2>RECOMMENDATIONS</h2>
      </div>
        
        <div className='recommendation-cards-container'>
          {selecteGenres.map((genre) => /* {
            
              <span></span> */<div key={genre} className='Card-container'>
                <span></span>
              <h3 className='genre'>{genre}</h3></div> 
            /* 
          } */)}
        </div>
          
        
    </div>
  )
}

export default Recommendations