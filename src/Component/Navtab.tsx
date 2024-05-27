/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../Assets/1912723.png'
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

const Navbar: React.FC = () => {
      const { darkMode } = DarkMode();
return (
     <div className={darkMode ? 'dark-mode' : ''}>
  <nav id="navbar" style={{ backgroundColor: 'white' }}>
          <ul className="navbar-items flexbox-col">
         <Link to="/Home">  <a href="file:///C:/Users/DELL/Desktop/projet%20de%20synte/page%20d'acceuil.html">
              <div className='logo'  style={{ width: '50px', height: '50px' }}> 
            <img src={Logo} alt="Logo"style={{ width: '100%', height: '100%' }} />
            </div> 
            
            </a></Link> 
          
         <li className="navbar-item flexbox-left">
    <Link to="/Classes" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Classes</span>
    </Link>
</li>
  <li className="navbar-item flexbox-left">
    <Link to="/Lives" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Lives</span>
    </Link>
</li>
    <li className="navbar-item flexbox-left">
    <Link to="/Store" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Store</span>
    </Link>
</li>
    <li className="navbar-item flexbox-left">
    <Link to="/MusicPlay" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Music</span>
    </Link>
</li>
      <li className="navbar-item flexbox-left">
        <Link to="/calorieCounter" className="navbar-item-inner flexbox-left">
          <div className="navbar-item-inner-icon-wrapper flexbox">
        
          </div>
          <span className="link-text">Calorie Counter</span>
      </Link>
      </li>
    <li className="navbar-item flexbox-left">
    <Link to="/Stepcounter" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Step Counter</span>
    </Link>
</li>
       
<li className="navbar-item flexbox-left">
    <Link to="/Agenda" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">My Agenda</span>
    </Link>
</li>
 
 <li className="navbar-item flexbox-left">
    <Link to="/Login" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Login</span>
    </Link>
</li>
 
       <li className="navbar-item flexbox-left">
    <Link to="/fitmaroc" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Logout</span>
    </Link>
</li>
   <li className="navbar-item flexbox-left">
    <Link to="/Settings" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">Settings</span>
    </Link>
</li>
     <li className="navbar-item flexbox-left">
    <Link to="/About" className="navbar-item-inner flexbox-left">
        <div className="navbar-item-inner-icon-wrapper flexbox">
        
        </div>
        <span className="link-text">About us</span>
    </Link>
</li>
    </ul>
       
        </nav>
        </div>
  );
};

export default Navbar;