// DivOfdarkmode.tsx
import React from 'react';
import DarkMode from './DarkMode';

const DivOfdarkmode: React.FC = () => {
  const { darkMode } = DarkMode();

  return (
    <div className={darkMode ? 'dark-mode' : ''}></div>
  );
};

export default DivOfdarkmode;
