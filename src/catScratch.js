/*
*
*
*  OLD IMPLEMENTATION OF BOARD
*
*
*/

const catScratch = (gameBoard) =>
{
    //console.log("gameboard is ", gameBoard)
    for(let i = 0; i < 9; i++)
    {
        if(gameBoard[i] == '-')
        {
            return false
        }
    }
    return true
}

export default catScratch