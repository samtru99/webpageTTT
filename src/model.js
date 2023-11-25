
const model_move = (board, model_data) =>
{
    const [bestMove, setBestMove] = useState("")
    console.log("board = ", board)
    const tempBoard = Array(9).fill("-")


    board.forEach(({position,value}) =>  {
        if(value) {
            tempBoard[position] = value;
        }
    });
    
    const board_string = tempBoard.join('')
    console.log("board = ", board_string)
    console.log("model moves = ", model_data[board_string])
    //console.log("possible moves are ", model_data[board_string])
    
    Object.entries(model_data[board_string]).forEach(([position,value]) => {
        console.log(position + " = " + value);
    });
};

export default model_move;

