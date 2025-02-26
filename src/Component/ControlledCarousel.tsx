import React, { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Assets/41Leu3gBUFL-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="d-flex justify-content-center"> {/* Centering container */}
          <img
            className="d-block w-20" // Adjusted width to 50%
            src={ExampleCarouselImage}
            alt="First slide"
          />
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center"> {/* Centering container */}
          <img
            className="d-block w-20" // Adjusted width to 50%
            src={ExampleCarouselImage}
            alt="Second slide"
          />
        </div>
    
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center"> 
          <img
            className="d-block w-20" // Adjusted width to 50%
            src={ExampleCarouselImage}
            alt="Third slide"
          />
        </div>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
