import React, { useState } from 'react';
import './FontSelector.css';

const FontSelector = ({ font, setFont }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedFont) => {
    setFont(selectedFont);
    setIsOpen(false);
  };

  return (
    <div className="font-selector">
      <button onClick={() => setIsOpen(!isOpen)} className="font-selector-button">
        <span>{font}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 1 6 6 6-6"/></svg>
      </button>
      {isOpen && (
        <ul className="font-selector-dropdown">
          <li onClick={() => handleSelect('Sans Serif')}>Sans Serif</li>
          <li onClick={() => handleSelect('Serif')}>Serif</li>
          <li onClick={() => handleSelect('Mono')}>Mono</li>
        </ul>
      )}
    </div>
  );
};

export default FontSelector;
