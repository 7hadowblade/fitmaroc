/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../HomeStyle/Home.css'
import Navtab from './Navtab';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';
import pack from '../Assets/Swiss-Ball-Crunch-abs.jpg';
import chest from '../Assets/feature-image_664d327f-547e-4e9e-aae3-3e9d651d2cea.jpg';
import yoga from '../Assets/balance-featured.jpg';
import back from '../Assets/360_F_276196547_crTd4mmca3w9Lv46ndbVb08rNinyB9Ke.jpg';
import legs from '../Assets/Screen_Shot_2021-11-18_at_3.28.15_PM_600x.jpg';
import arms from '../Assets/shutterstock_1215769906-min_1.jpg';
import Footer from './Footer';
const Home = () => {
    const { darkMode } = DarkMode();
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
   <div>
   <Navtab/><h1 className='h1'>Start your workout Now</h1>
   <h1 className='h1'>Select</h1>
    <div className='con'>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src={pack}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Abs</h5>
              <p className="card-text">
               
              </p>
           <Link to="/VideoPlayer">   <div className="btn btn-primary">
             Start Now </div></Link> 
             
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src={chest}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Chest</h5>
              <p className="card-text">
              
              </p>
              <a href="#" className="btn btn-primary">
               Start Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src={yoga}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Yoga</h5>
              <p className="card-text">
              
              </p>
              <a href="#" className="btn btn-primary">
                  Start Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src={back}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Back</h5>
              <p className="card-text">
        
              </p>
              <a href="#" className="btn btn-primary">
                Start Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src={legs}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Lower Body</h5>
              <p className="card-text">
              
              </p>
              <a href="#" className="btn btn-primary">
                 Start Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src={arms}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Arms</h5>
              <p className="card-text">
              
              </p>
              <Link to="/VideoPlayer">   <div className="btn btn-primary">
               Start Now  </div> </Link>
            
            </div>
          </div>
        </div>
      </div>
      
     </div>  <Footer/>
    </div>
  </div></div>
  );
};

export default Home;
