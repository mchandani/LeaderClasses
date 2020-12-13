import Carousel from 'react-bootstrap/Carousel'
import React  from 'react';
import {useState} from 'react';
import swipe1 from './logo/swipe1.png';
import swipe2 from './logo/swipe2.jpg'; 
import './Home.css'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    
  };

  return (
    <Carousel activeIndex={index}  onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={swipe1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={swipe2}
          alt="Second slide"
        />

      </Carousel.Item>
      
    </Carousel>
  );
}

class MyGallery extends React.Component{
  render(){
    return(<ControlledCarousel />);
  }
}
export default MyGallery;