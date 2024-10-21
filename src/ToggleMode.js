import React, { useState, useEffect } from 'react';
import './ToggleMode.css';

const ToggleMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.className = savedMode ? 'dark-mode' : 'light-mode';
  }, []);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.body.className = !darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={`toggle-container ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleMode} className="toggle-button">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ToggleMode;
