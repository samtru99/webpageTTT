import React, { useState } from 'react';

const Hoverable = (Component) => {
  return function HoverableComponent(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const hoverStyle = {
      backgroundColor: 'lightblue', // Change background color on hover
      cursor: 'pointer', // Change cursor to a pointer on hover
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHovered ? hoverStyle : {}}
      >
        <Component {...props} />
      </div>
    );
  };
};

export default Hoverable;
