import React from 'react';
import './VideoPlayer.css'; // Assuming you have a CSS file for styling
import Navtab from './Navtab';
import TimeTracker from './TimeTracker';
import Footer from './Footer';
import DarkMode from './DarkMode';
import './SocialLinks.css';
const VideoPlayer = () => {
    const { darkMode } = DarkMode();
  return (
  
     <div className={darkMode ? 'dark-mode' : ''}>
       <nav className="social">
      <ul>
        <li ><div className='time'><TimeTracker/></div> </li>
      
      </ul>
    </nav>
    <div className='time'>
     <h1>Biceps</h1>
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/5319439-uhd_2160_3840_25fps.mp4')} type="video/mp4" />
        </video>
        <Navtab/>
      </div>
      <h1>Forearm</h1>
   
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/5319095-uhd_2160_3840_25fps.mp4')} type="video/mp4" />
        </video>
      </div>
     <h1>Triceps</h1>
         <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/5319433-uhd_2160_3840_25fps.mp4')} type="video/mp4" />
        </video>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default VideoPlayer;
