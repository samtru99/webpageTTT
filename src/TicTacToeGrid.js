//import React from 'react';
import React, { useState, useEffect } from 'react';
import ImageX from './images/X_image';
import ImageO from './images/O_image';

const PositionedComponent = ({ x, y, playersMove, handlePlayersTurn}) => 
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
        else
        {
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


function TicTacToeGrid()
{
  // Your tic-tac-toe logic goes here
  const [playersMove, setPlayersMove] = useState(true);
  const [symbol, setSymbol] = useState('');
  const [currPosition, setCurrPosition] = useState(23)
  const [board, setBoard] = useState(Array(9).fill('_'));

  useEffect(() => {
    //console.log("Player", symbol, "moved at", currPosition);
  }, [symbol]);


  const handlePlayersTurn = async (position) =>
  {
    
    if(playersMove)
    {
      setSymbol('X')
    }
    else
    {
      setSymbol('O')
    }

    setPlayersMove(!playersMove)    
    setCurrPosition(position)



    //console.log("Player", symbol, "moved at ", currPosition);  
  };
  

  useEffect(()=>
  {
    console.log("player ", symbol , "move at ", currPosition)
    const newBoard = board
    newBoard[currPosition-1] = symbol
    const finalBoard = newBoard
    setBoard(finalBoard);

    console.log("board is now ", board)
  })

  const positon1 = <PositionedComponent x="0px" y = "0px"  playersMove={playersMove} handlePlayersTurn={() => handlePlayersTurn(1)}/>
  const positon2 =  <PositionedComponent x="210px" y = "0px" playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(2)}/>
  const positon6 =  <PositionedComponent x="420px" y = "0px"   playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(3)}/>
  const positon3 =  <PositionedComponent x="0px" y = "210px"   playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(4)}/>
  const positon4 =  <PositionedComponent x="210px" y = "210px"  playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(5)}/>
  const positon7 =  <PositionedComponent x="420px" y = "210px" playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(6)}/>
  const positon5 =  <PositionedComponent x="0px" y = "420px" playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(7)}/>
  const positon9 =  <PositionedComponent x="210px" y = "420px"  playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(8)}/>
  const positon8 =  <PositionedComponent x="420px" y = "420px" playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(9)}/>
 

  return (
      <div style={bigSquareStyle}> 
          <div style={topRow}>  </div>
          <div style={bottomRow}>  </div>
          <div style={rightCol}>  </div>
          <div style={leftCol}>  </div>
          {positon1} 
          {positon2}
          {positon3}
          {positon4}
          {positon5}
          {positon6}
          {positon7}
          {positon8}
          {positon9}
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