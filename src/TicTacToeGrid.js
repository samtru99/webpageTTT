//import React from 'react';
import React, { useState } from 'react';
import ImageX from './images/X_image';
import ImageO from './images/O_image';

const PositionedComponent = ({ x, y, playersMove, handlePlayersTurn }) => 
{
    const [isHovered, setIsHovered] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [image, setImage] = useState(null)
    
    const componentStyle = {
      width: '200px',  // Adjust the width as needed
      height: '200px', // Adjust the height as needed
      backgroundColor: isHovered ? 'lightblue' : 'blue',
      position: 'absolute',
      left: x,   // Position the component horizontally based on x prop
      top: y,    // Position the component vertically based on y prop
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };


    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      const handleMouseClick = () =>
      {
        if(playersMove)
        {
          
          const imageToload = <ImageX x={x} y={y}/>
          setImage(imageToload)
        }
        else{
          const imageToload = <ImageO x={x} y={y}/>
          setImage(imageToload)
        }
        setIsPlayed(true);
        handlePlayersTurn();
      }
    return <div> 

        {isPlayed ?  
        (
          <>{image}</>
        )
        :
        (
            <div style={componentStyle}    
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                onClick={handleMouseClick}
            ></div>
        )}
      </div>
  };


const TicTacToeGrid = () => {
  // Your tic-tac-toe logic goes here
  const [playersMove, setplayersMove] = useState(true);
  
  const handlePlayersTurn = () =>
  {
    setplayersMove(!playersMove)
  }

  return (
      <div style={bigSquareStyle}> 
         <div style={topRow}>  </div>
         <div style={bottomRow}>  </div>
         <div style={rightCol}>  </div>
         <div style={leftCol}>  </div>
         <position1></position1>
        <PositionedComponent x="0px" y = "0px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="210px" y = "0px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="0px" y = "210px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="210px" y = "210px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="0px" y = "420px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="420px" y = "0px"  playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="420px" y = "210px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="420px" y = "420px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
        <PositionedComponent x="210px" y = "420px" playersMove={playersMove} handlePlayersTurn={handlePlayersTurn}/>
      </div>
  );
}


const bigSquareStyle = {
    width: '620px',
    height: '620px', 
    backgroundColor: 'grey', 
    position: 'absolute',
  };

const topRow = {
    width: '100%',
    height: '10px', 
    backgroundColor: 'black',
    top: '200px',
    position: 'absolute'
};

const bottomRow = {
    width: '100%', 
    height: '10px', 
    backgroundColor: 'black',
    top: '410px',
    position: 'absolute'
};

const rightCol = {
    width: '10px', 
    height: '100%', 
    backgroundColor: 'black',
    right: '200px',
    position: 'absolute'
};

const leftCol = {
    width: '10px', 
    height: '100%', 
    backgroundColor: 'black',
    left: '200px',
    position: 'absolute'
}



export default TicTacToeGrid;