import React from 'react';
import ToggleSwitch from './ToggleSwitch.jsx';
import FontSelector from './FontSelector.jsx';
import Logo from '../assets/logo.svg?react';
import './Header.css';

const Header = ({ theme, toggleTheme, font, setFont }) => {
  return (
    <header className="header">
      <Logo />
      <div className="controls">
        <FontSelector font={font} setFont={setFont} />
        <div className="separator"></div>
        <ToggleSwitch isToggled={theme === 'dark'} onToggle={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
