import React from 'react';
import DarkMode from './DarkMode';
import './Lives.css'
import Navtab from './Navtab';
import Footer from './Footer';
import SocialLinks from './SocialLinks';
const Lives: React.FC = () => {
  const { darkMode } = DarkMode();

  return (<div className={darkMode ? 'dark-mode' : ''}>
    <div className='hh'>  <h1>FitMaroc.ma</h1>
        <div className='h'>
          
    <div  >
        <h1>We are sorry </h1>
      <h1>There is no streams For the moment :/ </h1>
       
    
    <SocialLinks/>
    <Navtab/>
    <Footer/>
    </div>
    </div></div>
    </div>
  );
};

export default Lives;
