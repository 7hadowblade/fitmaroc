/* eslint-disable jsx-a11y/anchor-is-valid */
import DarkMode from './DarkMode';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const { darkMode } = DarkMode();
  return (
  <div className={darkMode ? 'dark-mode' : ''}>
    <footer className="footer">
      <div className="roww">
     <a href="#" className="roww"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#" className="roww"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#" className="roww"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="#" className="roww"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      <div className="row">
        <strong><p>Copyright © 2024 FitMaroc.ma </p></strong>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
