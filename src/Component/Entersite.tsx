/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '@ionic/core';
import '../Style/enter.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Entersite: React.FC = () => {

  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-*********"
          crossOrigin="anonymous"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
        <link rel="icon" type="image/x-icon" href="1912723.png" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
       
      </head>
      <body>
        <div className="menu">
          <div className="container flex">
            <div className="mobile-btn">
              
            </div>
            <div className="logo">
              <a href="file:///C:/Users/DELL/Desktop/projet%20de%20synte/google%20interface.html">
                <img src="1912723.png" alt="" />
              </a>
            </div>
           
            
           <Link to="/Login"> <a href="" className="btn"><strong>
              Login</strong> </a></Link>
           
          </div>
        </div>
        <header className="header">
          <div className="container flex">
            <div className="text">
              <h1 className="mb">
                Complete Daily <br />
                <span>Workout</span> At Home
              </h1>
              <p className="mb">Begin your day with a top-notch training session to set the pace</p>
            
              <Link to="/Classes"> <a href="" className="btn mt">
              Get Started Now</a></Link>
            </div>
            <div className="visual">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png" alt="" />
            </div>
          </div>
        </header>
        <div className="section" id="why-us">
          <div className="container flex">
            <div className="text">
              <h2 className="primary mb">Why Choose Us?</h2>
              <h3 className="secondary mb">Consultation with Expert.</h3>
              <p className="tertiary"></p>
            
             
            </div>
            <div className="visual">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/why-us.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section" id="explore">
          <div className="container flex">
            <div className="visual">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg" alt="" />
            </div>
            <div className="text">
              <h2 className="primary mb">Explore Our Calorie calculator</h2>
              <p className="tertiary mb"></p>
                 <Link to="/CalorieCounter"> <a href="" className="btn mt">
              Calorie Counter</a></Link>
            </div>
          </div>
        </div>
        <div className="section" id="trainer">
          <h2 className="primary mb">Our Professional Trainers</h2>
          <div className="container flex">
            <div className="trainer">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg" alt="" />
              <h3 className="secondary mb">Alan Smith</h3>
              <p className="tertiary mb"></p>
              <a href="#" className="btn-2">
         
              </a>
            </div>
            <div className="trainer">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg" alt="" />
              <h3 className="secondary mb">Jake Peter</h3>
              <p className="tertiary mb"></p>
              <a href="#" className="btn-2">
             
              </a>
            </div>
            <div className="trainer">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg" alt="" />
              <h3 className="secondary mb">Sara Walker</h3>
              <p className="tertiary mb"></p>
              <a href="#" className="btn-2">
         
              </a>
            </div>
          </div>
        </div>
        <div className="section" id="testimonial">
          <div className="container flex">
            <div className="text">
              <h2 className="primary">That's What Our Super Client Says</h2>
              <br />
              <br />
              <br />
              <div className="client">
                <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg" alt="" />
                <h2 className="secondary">Exelent Training</h2>
                <p className="tertiary"></p>
              
              </div>
              <div className="client">
                <img src="h" alt="" />
                <h2 className="secondary">WoW</h2>
                <p className="tertiary"></p>
              
              </div>  
            </div>
            <div className="visual">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png" alt="" />
            </div>
          </div>
        </div>
        
         <Footer/>
      </body>
    </html>
  );
};

export default Entersite;
