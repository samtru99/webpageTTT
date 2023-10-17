import React from 'react';
import myImage from './Oimage.png'; // Replace with the actual file path of your image



const ImageO = ({x,y}) => {
  const imageFormat = 
  {
    width: '200px',  // Adjust the width as needed
    height: '200px',
    position: 'absolute',
    left: x,
    top: y,
  }
return (
  <div>
    <img src={myImage} alt="My Image" style={imageFormat}/>
  </div>
);
};

export default ImageO;