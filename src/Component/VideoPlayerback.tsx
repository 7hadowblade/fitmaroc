import React from 'react';
import './VideoPlayer.css'; // Assuming you have a CSS file for styling
import Navtab from './Navtab';
import TimeTracker from './TimeTracker';
import Footer from './Footer';
import DarkMode from './DarkMode';
import './SocialLinks.css';
const VideoPlayerleg = () => {
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
        </div>
     <h1>Back</h1>
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/backk.mp4')} type="video/mp4" />
        </video>
        <Navtab/>
      </div>
 <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/backo.mp4')} type="video/mp4" />
        </video>
      </div>
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/backo1.mp4')} type="video/mp4" />
        </video>
      </div>
     
   
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/back1.mp4')} type="video/mp4" />
        </video>
      </div>
     
         <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/back2.mp4')} type="video/mp4" />
        </video>
      </div>
       <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/back.mp4')} type="video/mp4" />
        </video>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default VideoPlayerleg;
