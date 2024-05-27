/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import DarkMode from './DarkMode';
const Footer2: React.FC = () => {
  const { darkMode } = DarkMode();
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
    <div className="footer2">
    
    <footer className="footer">
      <div className="roww">
     <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      <div className="row">
        <strong><p>Copyright © 2024 FitMaroc.ma </p></strong>
      </div>
    </footer></div></div>
  );
};

export default Footer2;
