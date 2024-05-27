/* eslint-disable jsx-a11y/iframe-has-title */
import React, { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarouselyoutube() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="d-flex justify-content-center"> 
            <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8gQbgyTlS-8?si=12eQK-MXJI3i7Tuw" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center"> 
                <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8-49TscRd0M?si=GeH3ZY2tnT8rDgcO" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
        </div>
    
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center"> 
        
                      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rwAHQ_vH-f8?si=yQsFi5HYklC9Wku4" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarouselyoutube;
