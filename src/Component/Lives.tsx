/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import DarkMode from './DarkMode';
import './Lives.css'
import Navtab from './Navtab';
import Footer from './Footer';
import SocialLinks from './SocialLinks';
import profile from '../Assets/1912723.png';
import ControlledCarouselyoutube from './ControlledCarouselyoutube';
const Lives: React.FC = () => {
  const { darkMode } = DarkMode();

  return (<div className={darkMode ? 'dark-mode' : ''}>
    <div className='hh'>  <h1>FitMaroc.ma</h1>
    
        <div className='h'>
           <img src={profile} alt='Profile' className='avatar'></img>
    <div  >
        <h1>We are sorry </h1>
      <h1>There is no streams For the moment :/ </h1>
       
    
     
    <SocialLinks/>
      <div className="vid">
   <ControlledCarouselyoutube/>
      
      </div>
    <Navtab/>
    <Footer/>
    </div>
    </div></div>
    </div>
  );
};

export default Lives;
