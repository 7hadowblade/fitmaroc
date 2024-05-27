import React from 'react';
import './VideoPlayer.css'; // Assuming you have a CSS file for styling
import Navtab from './Navtab';
import TimeTracker from './TimeTracker';
import Footer from './Footer';
import DarkMode from './DarkMode';
import './SocialLinks.css';
const VideoPlayerabs = () => {
    const { darkMode } = DarkMode();
  return (
     <div className={darkMode ? 'dark-mode' : ''}>
         <nav className="social">
      <ul>
        <li ><div className='time'><TimeTracker/></div> </li>
      
      </ul>
    </nav>
    <div className='time'>
     <h1>Relax your self first</h1>
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/4812513-uhd_3840_2160_25fps.mp4')} type="video/mp4" />
        </video>
        <Navtab/>
      </div>
      <h1>Set Up</h1>

      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/4754028-uhd_4096_2160_25fps.mp4')} type="video/mp4" />
        </video>
      </div>
       <h1>Planch</h1>
     
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/7589748-uhd_2160_3840_25fps.mp4')} type="video/mp4" />
        </video>
      </div>
    
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/10315283-hd_1920_1080_30fps.mp4')} type="video/mp4" />
        </video>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default VideoPlayerabs;
