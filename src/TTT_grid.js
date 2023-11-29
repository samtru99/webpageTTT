import {React, useState, useRef, useEffect} from 'react';
import "./gameOver"
import isWinner from './gameOver';
import catScratch from './catScratch';
import model_move from './model';
const initGame = () => Array.from({ length: 9 }, (_, i) => ({
  position: i,
}))

function TTT({model}) 
{
  const [dictionary_counter, setDictionary_counter] = useState(0)

  const [playersMove, setPlayersMove] = useState(true)
  const [board, setBoard] = useState(initGame)
  const [game, setGame] = useState(false)
  const [tie, setTie] = useState(false)

  const [firstUpdate, setFirstUpdate] = useState(true)
  const [didOWin, setDidOWin] = useState(false)

  const [correct_position, setCorrect_postion] = useState(0)

  const handlePlayersTurn = position => 
  {
    if(game)
    {
      return
    }
    // compute the symbol when you need it
    const value = playersMove ? 'X' : 'O'
    
    // update the board using the previous board state
    setBoard(b => b.toSpliced(position, 1, {
      position,
      value
    }))
    // update the current player
    setPlayersMove(!playersMove)
    
  }
  
  // compute available positions
  const availablePositions = board.filter(c => !c.value)
    
  useEffect(() => {
    //1st render or someone won
    if (firstUpdate)
    {
      setFirstUpdate(false)
      return
    }
    //Check did X win
     if(isWinner(board, false))
     {
       setGame(true)
       setDidOWin(false)
       return
     }
     //Check did O win
     if(isWinner(board, true))
     {
       setGame(true)
       setDidOWin(true)
       return
     }
    //Return if players X
    if(playersMove)
    {
      return
    }
    //Board is full - determine if win or tie
    if(availablePositions.length === 0)
    {
      if(isWinner(board, false))
      {
        setGame(true)
        return
      }
      setTie(true)
      return
    }
    
    // if it's the player's turn or no more positions, skip
    // find an open position
    const move = model_move(board, model[dictionary_counter])
    for (let i = 0; i < availablePositions.length; i++) 
    {
      const { position, value } = availablePositions[i];
      if(position === move)
      {
        handlePlayersTurn(availablePositions[i].position)
        setDictionary_counter((prevCounter) => prevCounter + 1)
      }
    }

  }, [playersMove, availablePositions,firstUpdate,board])
  

  return (
    <div>
    {tie && game != true? (
       <h1 style={outcomeText}> Tie game </h1>
    ) : (
      <>
      {game ? (
          <>
          {didOWin ? (<h1 style={outcomeText}> you lost </h1>):(
            <h1 style={outcomeText}> you won </h1>
          )}
          </>
        ) : (
           <div style={boardStyle}>
            {board.map(({ position, value }) => (
              <div
                  {...!value && { onClick: () => handlePlayersTurn(position) }}
                  style={cell}
                  key={position}>
                    
                  {value || '-'}
              </div>
            ))}
            </div>      
          )}
      </>
    )}
  </div>
);
};

const cell = {
    display: 'flex',
    border: '1px solid black',
    justifyContent: 'center',
    alignItems: 'center',
  };


const boardStyle = {
display: 'grid',
height: '500px',
width: '500px',
gridTemplateRows: 'repeat(3, 1fr)',
gridTemplateColumns: 'repeat(3, 1fr)',
};
  
const bigSquareStyle = {
  width: '1000px',
  height: '1000px', 
  backgroundColor: 'grey', 
  position: 'absolute',
};

const outcomeText = {
  position: 'absolute',
  top: '30%',
  left: '40%'

}

export default TTT;
