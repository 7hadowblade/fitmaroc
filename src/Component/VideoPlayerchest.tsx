import React from 'react';
import './VideoPlayer.css'; // Assuming you have a CSS file for styling
import Navtab from './Navtab';
import TimeTracker from './TimeTracker';
import Footer from './Footer';
import DarkMode from './DarkMode';
import './SocialLinks.css';
const VideoPlayerchest = () => {
    const { darkMode } = DarkMode();
  return (
  
     <div className={darkMode ? 'dark-mode' : ''}>
        <nav className="social">
      <ul>
        <li ><div className='time'><TimeTracker/></div> </li>
      
      </ul>
    </nav>
    <div className='time'>
     <h1>Chest</h1>
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/chest.mp4')} type="video/mp4" />
        </video>
        <Navtab/>
      </div>
      <h1>Sholder and Chest</h1>
   
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/chest4.mp4')} type="video/mp4" />
        </video>
      </div>
       <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/chest2.mp4')} type="video/mp4" />
        </video>
      </div>
     <h1>Step</h1>
         <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/chest3.mp4')} type="video/mp4" />
        </video>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default VideoPlayerchest;
