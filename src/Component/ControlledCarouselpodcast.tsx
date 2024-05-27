/* eslint-disable jsx-a11y/iframe-has-title */
import React, { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarouselpodcast() {
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
        src="https://www.youtube.com/embed/LAmGfokvgzA?si=JfTEmWcFZnYX9HE-"
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
        src= "https://www.youtube.com/embed/ZjIRYn7x8sk?si=t2fzCUJMUr0uQHFj"
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
        src="https://www.youtube.com/embed/SwQhKFMxmDY?si=Gb4CgmfztLhg_qVI"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarouselpodcast;
