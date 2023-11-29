import React, { useState, useEffect } from 'react';


const isWinner = (gameBoard, currPlayer) =>
{
    const value = currPlayer ? 'O' : 'X'
    const winPatterns = 
    [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6], // Diagonal from top-right to bottom-left
      ];
      
      for (const pattern of winPatterns) 
      {
        const [a, b, c] = pattern;
        if (gameBoard[a].value === value && gameBoard[b].value === value && gameBoard[c].value === value) 
        {
          return true;
        }
      }
      
      return false;

      
};

export default isWinner;

