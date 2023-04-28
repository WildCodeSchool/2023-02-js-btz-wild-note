import './ThemeDisco.css';
import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';


function DiscoMode() {
  const [isDiscoModeActive, setIsDiscoModeActive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    let intervalId;

    if (isDiscoModeActive) {
      intervalId = setInterval(() => {
        setBackgroundColor(randomColor());
      }, 300);
    }

    return () => clearInterval(intervalId);
  }, [isDiscoModeActive]);

  const handleToggleDiscoMode = () => {
    setIsDiscoModeActive(!isDiscoModeActive);
  };

  return (
    <div style={{ backgroundColor }}>
      <button className="disco-button" onClick={handleToggleDiscoMode}>
        {isDiscoModeActive ? 'Disable Disco Mode' : 'Enable Disco Mode'}
      </button>
    </div>
  );
}

export default DiscoMode;
