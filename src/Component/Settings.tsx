import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Footer2 from './Footer2';
import Navbar from './Navtab';
import DarkMode from './DarkMode';
import profile from '../Assets/istockphoto-1495088043-612x612.jpg';
const SettingsContainer = styled.div`
  text-align: center;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleButton = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledButton = styled.label`
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 20px;
  background: white;
  border: 2px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  margin-left: 80px; /* Adjust the margin-left */
`;

interface SettingsProps {
  toggleDarkMode: () => void;
  onDarkModeChange?: (darkMode: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({ toggleDarkMode, onDarkModeChange }) => {
  const { darkMode } = DarkMode();
  const [checked, setChecked] = useState(() => {
    const savedChecked = localStorage.getItem('darkMode');
    return savedChecked ? JSON.parse(savedChecked) : false;
  });

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    localStorage.setItem('darkMode', JSON.stringify(newChecked));
    if (onDarkModeChange) {
      onDarkModeChange(newChecked);
    }
    toggleDarkMode();
  };

  return (<div>
     <SettingsContainer className={darkMode ? 'dark-mode' : ''}>
    <img src={profile} alt='Profile' className='avatar'></img>
   
      <h1 className="theme">Theme</h1>
      <ToggleContainer>
        <StyledButton>
          <ToggleButton
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <ToggleIcon icon={checked ? faMoon : faSun} style={{ color: checked ? 'gray' : 'orange' }} />
        </StyledButton>
      </ToggleContainer>
      <Footer2 />
      <Navbar />
    </SettingsContainer></div>
  );
};

export default Settings;
