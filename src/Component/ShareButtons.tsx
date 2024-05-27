/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaReddit, FaTelegram } from 'react-icons/fa';
import './Button.css'
const ShareButtons: React.FC = () => {
  useEffect(() => {
    const link = encodeURIComponent('file:///C:/Users/DELL/Desktop/projet%20de%20synte/google%20interface.html');
    const msg = encodeURIComponent('Embrace fitness, unlock your potential. Join our journey to strength and well-being. Let’s crush goals together! 💪 #FitMaroc #fitness #health');
    const title = encodeURIComponent('Article or Post Title Here');

    const setShareLinks = () => {
      const fb = document.querySelector('.facebook');
      fb?.setAttribute('href', `https://www.facebook.com/share.php?u=${link}`);

      const twitter = document.querySelector('.twitter');
      twitter?.setAttribute('href', `https://twitter.com/share?url=${link}&text=${msg}`);

      const whatsapp = document.querySelector('.whatsapp');
      whatsapp?.setAttribute('href', `https://api.whatsapp.com/send?text=${msg}%0A${link}`);

      const reddit = document.querySelector('.reddit');
      reddit?.setAttribute('href', `https://www.reddit.com/submit?url=${link}&title=${title}`);

      const telegram = document.querySelector('.telegram');
      telegram?.setAttribute('href', `https://telegram.me/share/url?url=${link}&text=${msg}`);
    };

    setShareLinks();
  }, []);

  return (
    <div className='bb'>
      <center>
        <div className="btn_wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="span">Share</span>
          <div className="container">
            <div id="share-buttons" style={{ color: 'white' }}>
              <a className="facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF style={{ color: '#b0951f' }} />
              </a>
              <a className="whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp style={{ color: '#b0951f' }} />
              </a>
              <a className="twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: '#b0951f' }} />
              </a>
              <a className="reddit" target="_blank" rel="noopener noreferrer">
                <FaReddit style={{ color: '#b0951f' }} />
              </a>
              <a className="telegram" target="_blank" rel="noopener noreferrer">
                <FaTelegram style={{ color: '#b0951f' }} />
              </a>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default ShareButtons;
