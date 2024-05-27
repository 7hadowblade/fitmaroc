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
        <h1>Relax your self first </h1>
        <h1>Take a deep breathe </h1>
         <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/yoga.mp4')} type="video/mp4" />
        </video>
        </div>
     <h1>Yoga</h1>
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/yoga1.mp4')} type="video/mp4" />
        </video>
        <Navtab/>
      </div>
 <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/yoga2.mp4')} type="video/mp4" />
        </video>
      </div>
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/yoga3.mp4')} type="video/mp4" />
        </video>
      </div>
     
   
      <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/yoga4.mp4')} type="video/mp4" />
        </video>
      </div>
     
         <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/yoga5.mp4')} type="video/mp4" />
        </video>
      </div>
       <div className="video-container">
        <video className="video" controls>
          <source src={require('../Assets/yoga6.mp4')} type="video/mp4" />
        </video>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default VideoPlayerleg;
