import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <nav className="social">
      <ul>
        <li className="twitter"><a href=""><span><FontAwesomeIcon icon={faTwitter} /></span> <span/>Twitter </a></li>
        <li className="facebook"><a href=""><span><FontAwesomeIcon icon={faFacebook} /></span>  <span/>Facebook</a></li>
        <li className="google-plus"><a href=""><span><FontAwesomeIcon icon={faGooglePlus} /> </span> <span/>Google plus </a></li>
        <li className="instagram"><a href=""><span><FontAwesomeIcon icon={faInstagram} /> </span> <span/>Instagram </a></li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
