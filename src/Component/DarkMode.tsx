// DarkMode.tsx
import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => { 
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};

export default DarkMode;
