import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isToggled, onToggle }) => {
  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="slider" />
      </label>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686A10.544 10.544 0 0 1 1 10.449Z"/>
      </svg>
    </div>
  );
};

export default ToggleSwitch;
