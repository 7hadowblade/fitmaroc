/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Navbar from "./Navtab";
import Footer from "./Footer";
import shirt1 from '../Assets/shirt1.png';
import DarkMode from './DarkMode';
import img1 from '../Assets/Black-Slimfit-Trackpants-Front.png';
import img2 from '../Assets/41Leu3gBUFL-removebg-preview.png';
import './Store.css';
import { Link } from 'react-router-dom';
import ControlledCarousel from "./ControlledCarousel";
import sbat from '../Assets/sbat1.png';
import sbat2 from '../Assets/sbat2.png';
import shirt2 from '../Assets/shirt2.png';
import shirt3 from '../Assets/shirt3.png';
import srwal1 from '../Assets/srwal1.png';
import srwal2 from '../Assets/srwal.png';

const Store: React.FC = () => {
  const { darkMode } = DarkMode();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [, setTotalPrice] = useState(0);

  useEffect(() => {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

    const showDivs = () => {
      // Check if slides are available
      if (slides && slides.length > 0) {
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
          slides[i].classList.add("slide-left");
        }
        
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        slides[slideIndex - 1].classList.add("active");
        slides[slideIndex - 1].classList.remove("slide-left");
      }

      // Recursively call showDivs after 2 seconds
      setTimeout(showDivs, 2000);
    };

    // Initial call to start the slider
    showDivs();
  }, []); // Run once on component mount

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const renderShoes = () => (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Shoes</h1>
      <div className="bod">
        <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={img2} style={{ width: "50%" }} alt="Nike Shoes" />
              <span className="price">$67</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Nike Shoes</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/payment/${67}`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
         <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={sbat2} style={{ width: "50%" }} alt="Nike Shoes" />
              <span className="price">$67</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Nike Shoes</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/payment/${67}`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
         <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={sbat} style={{ width: "50%" }} alt="Nike Shoes" />
              <span className="price">$67</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Nike Shoes</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/payment/${67}`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
        {/* More shoe cards go here */}
      </div>
    </>
  );

  const renderPants = () => (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Pants</h1>
      <div className="bod">
        {/* Sport Pants cards go here */}    
        <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={srwal2} style={{ width: "50%" }} alt="Sport Pants" />
              <span className="price">$45</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Sport Pants</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/PaymentForm`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
        <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={img1} style={{ width: "50%" }} alt="Sport Pants" />
              <span className="price">$45</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Sport Pants</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/PaymentForm`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
        <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={srwal1} style={{ width: "50%" }} alt="Sport Pants" />
              <span className="price">$45</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Sport Pants</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/PaymentForm`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
        {/* More pants cards go here */}
      </div>
    </>
  );

  const renderShirts = () => (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Shirts</h1>
      <div className="bod">
        {/* Shirt cards go here */}
        <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={shirt3} style={{ width: "50%" }} alt="Shirt" />
              <span className="price">$30</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Shirt</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/PaymentForm`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
         <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={shirt1} style={{ width: "50%" }} alt="Shirt" />
              <span className="price">$30</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Shirt</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/PaymentForm`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
         <div className="containerrr">
          <div className="cards">
            <div className="cards-imgBx">
              <img src={shirt2} style={{ width: "50%" }} alt="Shirt" />
              <span className="price">$30</span>
            </div>
            <div className="contentBx">
              <h2 style={{ color: "rgb(154, 69, 32)" }}>Shirt</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span className="cl1"></span>
                <span className="cl2"></span>
                <span className="cl3"></span>
              </div>
              <Link to={`/PaymentForm`}><button className="btn btn-primary" style={{ border: '1px' }}>Buy Now</button></Link>
            </div>
          </div>
        </div>
        {/* More shirt cards go here */}
      </div>
    </>
  );

  useEffect(() => {
    const prices = Array.from(document.getElementsByClassName("price")).map(
      (priceElement) => parseFloat(priceElement.textContent?.replace("$", "") || "0")
    );
    setTotalPrice(prices.reduce((acc, price) => acc + price, 0));
  }, [selectedCategory]);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="neons col-12">
              <a href="#" className="a">
                <h1 className="h1"><em>FitMaroc.com</em></h1>
              </a>
            </div>
          </div>
        </div>

        <div className="select-container">
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">Categories</option>
             <option value="">All</option>
            <option value="shoes">Shoes</option>
            <option value="pants">Pants</option>
            <option value="shirts">Shirts</option>
          </select>
        </div>

        {selectedCategory === "" && (
          <>
            {renderShoes()}
            {renderPants()}
            {renderShirts()}
          </>
        )}
        {selectedCategory === "shoes" && renderShoes()}
        {selectedCategory === "pants" && renderPants()}
        {selectedCategory === "shirts" && renderShirts()}

        <h1 style={{ textAlign: "center" }}>New Shipment</h1>
        <ControlledCarousel />
        <div className="slider-container">
          <div className="mySlides active">
            <img src={img1} alt="Slide 1" />
          </div>
          <div className="mySlides">
            <img src={img2} alt="Slide 2" />
          </div>
          <div className="mySlides">
            <img src={img1} alt="Slide 3" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Store;
