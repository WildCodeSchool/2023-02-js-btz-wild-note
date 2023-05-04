import './ThemeSwitchDisco.css';
import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';


const DiscoMode=()=> {
  const [isDiscoModeActive, setIsDiscoModeActive] = useState(true);
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
      <div className={isDiscoModeActive ? 'discotheme' : null} onClick={handleToggleDiscoMode}>
        {isDiscoModeActive ? 'Disco On' : 'Disco Off'}
      </div>
    </div>
  );
}

export default DiscoMode;
