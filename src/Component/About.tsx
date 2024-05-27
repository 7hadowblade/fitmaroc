/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Navbar from './Navtab';
import './Button.css';
import ShareButtons from './ShareButtons';
import DarkMode from './DarkMode';
import Footer from './Footer';

const About: React.FC = () => {
  const { darkMode } = DarkMode();

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-*********"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <div className={darkMode ? 'dark-mode' : ''}>
          <div>
            <canvas></canvas>
          </div>
          <b>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className='dd'>
                <h1 className="h51">FitMaroc</h1>
              </div>
            </div>
          </b>

          <div className="content">
            <p>
              FitMaroc is a dynamic fitness website dedicated to fostering health and wellness within the Moroccan community.
              <br /> We provide comprehensive resources, including workout routines, nutritional guidance, and motivational content, to empower individuals on their fitness journey.
            </p>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
          <div>
            <div style={{ width: '100%',alignItems:'center',textAlign:'center',marginTop:'8%',marginLeft:'2%' }}>
              <iframe
              
                width="90%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=parc%20plaza%20mohammedia+(Fitmaroc)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps tracker sport</a>
              </iframe>
            </div>
           
            <Navbar />
          </div>
          <ShareButtons />
           <Footer/>
        </div>
      </body>
    </html>
  );
};

export default About;
