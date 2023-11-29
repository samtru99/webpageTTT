//import React from 'react';
/*
*
*
*  OLD IMPLEMENTATION OF BOARD
*
*
*/
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import ImageX from './images/X_image';
import ImageO from './images/O_image';
import isWinner from './gameOver';
import catScratch from './catScratch';




const PositionedComponent = forwardRef(({ x, y, playersMove, handlePlayersTurn}, ref) => {
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
                ref = {ref}
            ></div>
        )}
      </div>
  });

function TicTacToeGrid(references)
{
  // Your tic-tac-toe logic goes here
  const [playersMove, setPlayersMove] = useState(true);
  const [symbol, setSymbol] = useState('');
  const [currPosition, setCurrPosition] = useState(23)
  const [board, setBoard] = useState(Array(9).fill('-'));
  const [game, setGame] = useState(false)
  const  [tie, setTie] = useState(false)
  //const [board, setBoard] = useState(initGame)
  const [autoRefs, setAtuoRefs] = useState(references.myarr)




  
  
  const handlePlayersTurn = async (position) =>
  {
    console.log("in handle function")
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

  };

  const positon1 =  <PositionedComponent x="0px" y = "0px"  playersMove={playersMove} handlePlayersTurn={() => handlePlayersTurn(1)}/>
  const positon2 =  <PositionedComponent x="210px" y = "0px"   playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(2)}/>
  const positon3 =  <PositionedComponent x="420px" y = "0px"    playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(3)}/>
  const positon4 =  <PositionedComponent x="0px" y = "210px"   playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(4)}/>
  const positon5 =  <PositionedComponent x="210px" y = "210px"   playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(5)}/>
  const positon6 =  <PositionedComponent x="420px" y = "210px" playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(6)}/>
  const positon7 =  <PositionedComponent x="0px" y = "420px"    playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(7)}/>
  const positon8 =  <PositionedComponent x="210px" y = "420px"   playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(8)}/>
  const positon9 =  <PositionedComponent x="420px" y = "420px"   playersMove={playersMove} handlePlayersTurn={() =>handlePlayersTurn(9)}/>
  //const allPositions = [positon1,positon2,positon3,positon4,positon5,positon6,positon7,positon8,positon9]
  

  useEffect(()=>
  {
    console.log("player turn is ", playersMove)
    if(!playersMove)
    {
      console.log("O turn")
      const randomValue = Math.floor(Math.random() * 10);
      //console.log("obj is ", autoRefs[randomValue])
      //autoRefs[randomValue].current.click()
    }
    const newBoard = [...board]
    newBoard[currPosition-1] = symbol
    const finalBoard = newBoard
    setBoard(finalBoard);
    setGame(isWinner(finalBoard, symbol));
    setTie(catScratch(board))
  },[playersMove, currPosition ])
 
  return (
      <div style={bigSquareStyle}>
      {tie && game != true? (
         <h1 style={outcomeText}> tie game </h1>
      ) : (
        <>
        {game ? (
            <>
            {playersMove ? (<h1 style={outcomeText}> you lost </h1>):(
              <h1 style={outcomeText}> you won </h1>
            )}
            </>
          ) : (
            <>
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
            </>
            )}
        </>
      )}
    </div>
  );
}

const outcomeText = {
  position: 'absolute',
  top: '30%',
  left: '40%'

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


/*
  const handleAutoClick = (position) => {
    console.log("clicking random with val ", position)
    // Programmatically trigger a click on the component
    const randomValue = Math.floor(Math.random() * 10);
    console.log("randon val is ", randomValue)
    let _this = autoClick[randomValue]
    console.log("this is ", _this)
    _this.current.click()
   //autoClick[randomValue].current.click();
  */