import React, { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Assets/41Leu3gBUFL-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import sbat from '../Assets/sbat1.png';
import sbat2 from '../Assets/sbat2.png';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="carousel-image"
            src={sbat2}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="carousel-image"
            src={sbat}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
