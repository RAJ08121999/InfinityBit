import React, { useState } from 'react'
import GridBoard from './components/GridBoard';

const App = () => {
  const [board,setBoard] = useState(Array(9).fill(null));
  const [currentPlayer,setCurrentPlayer] = useState('X');
  const [winner,setWinner]= useState(null);
  const [winningCombo,setWinningCombo] = useState([]);

  const handleCellClick=(index)=>{
    if(board[index]!==null || winner)
      return;

      const newBoard=[...board];
      newBoard[index]=currentPlayer;
      setBoard(newBoard);

      const winnerFound = checkWinner(newBoard);

      if(winnerFound){
        setWinner(winnerFound.winner);
        setWinningCombo(winnerFound.combo);
        // console.log("Winner is ",winnerFound);
      }
      else if(newBoard.every(cell=>cell!==null)){
        setWinner('Draw');
        setWinningCombo([]);
      }
      else{
        setCurrentPlayer(currentPlayer==='X'?'O':'X');
      }

  }

  const resetBoard = ()=>{
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer('X');
    setWinningCombo([]);
  }

  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],//rows
    [0,3,6],[1,4,7],[2,5,8],//cols
    [0,4,8],[2,4,6]//diagonals
  ]


  function checkWinner(board) {
    for(const combo of winningCombos){
      const [first,second,third]=combo;
      if (board[first] !== null && board[first] === board[second] && board[first] === board[third]) {
        return {winner:board[first],combo};//returning an object
      }
    }
    return null;//no winner
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-slate-100'>
      <GridBoard 
        board={board}
        onCellClick={handleCellClick} 
        player={currentPlayer} 
        resetBoard={resetBoard} 
        winner={winner}
        winningCombo={winningCombo}
        />
    </div>
  )
}

export default App
