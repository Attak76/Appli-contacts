import React, { useState } from 'react';
import sunIcon from '../assets/images/sun.png';
import moonIcon from '../assets/images/moon.png';

const ToggleButton = ({ toggleTheme }) => {
  const [isDay, setIsDay] = useState(true);

  const handleClick = () => {
    setIsDay(!isDay);
    toggleTheme();
  };

  return (
    <div className="toggle-button" onClick={handleClick}>
      <div className={`icon-container ${isDay ? 'active' : ''}`}>
        <img src={sunIcon} alt="Sun Icon" className="sun-icon" />
      </div>
      <div className="divider"></div>
      <div className={`icon-container ${!isDay ? 'active' : ''}`}>
        <img src={moonIcon} alt="Moon Icon" className="moon-icon" />
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
};

export default ToggleButton;