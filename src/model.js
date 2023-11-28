import { useState } from "react";

const model_move = (board, model_data) =>
{
    const tempBoard = Array(9).fill("-")
    
    board.forEach(({position,value}) =>  {
        if(value) {
            tempBoard[position] = value;
        }
    });
    const board_string = tempBoard.join('')
    
    var highest_q_val = -1000;
    var o_move = " "
    Object.entries(model_data[board_string]).forEach(([position,value]) =>
    { 
        if(value > highest_q_val)
        {
            highest_q_val = value 
            o_move = position
        }
    });
    for (let i = 0; i < 9; i++) 
    {
        if (o_move[i] !== tempBoard[i]) 
        {
          console.log("o moves at ", i + 1)
          return i; // Return the position of the first non-matching element
        }
      }
};

export default model_move;

