import './ThemeSwitchDisco.css';
import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';


const DiscoMode=({isDiscoModeActive,setIsDiscoModeActive})=> {
  
  const [Color, setColor] = useState('');

  useEffect(() => {
    let intervalId;

    if (isDiscoModeActive) {
      intervalId = setInterval(() => {
        setColor(randomColor());
      }, 300);
    }

    return () => clearInterval(intervalId);
  }, [isDiscoModeActive]);

  const handleToggleDiscoMode = () => {
    setIsDiscoModeActive(!isDiscoModeActive);
  };

  return (
    <div style={{ Color }} className='disco-button'>
      <div  onClick={handleToggleDiscoMode}>
        {isDiscoModeActive ? 'Disco On' : 'Disco Off'}
      </div>
    </div>
  );
}

export default DiscoMode;
