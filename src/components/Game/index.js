import React,{useState, useEffect} from 'react';
import Board from '../Board';
import findaWinner from "../../services/findaWinner";
export default function Game(){
    const [history, setHistory] = useState([{"board": Array(9).fill(null)}]);
    const [isPlayer1, setIsPlayer1] = useState(true);
    const [status, setStatus] = useState("");
    const [stepNumber, setStepNumber] = useState(0);
    
    const [current, setCurrent] = useState(history[history.length - 1]);

    const moves = history.map((step, move) => {
        const desc = move ?
          'Voltar ao movimento #' + move :
          'Reiniciar';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      });

    const jumpTo = (step) => {
        setStepNumber(step);
        setHistory(history.slice(0, step + 1))
        setIsPlayer1(step % 2 === 0);
      }
    useEffect(()=>{
        console.log(history);
        setCurrent(history[stepNumber]);
        const winner = findaWinner(current.board.slice());
        if(winner){
            setStatus(`Vencedor: ${winner}`);
        }
        else if(stepNumber === 9){
            setStatus(`Empate`);
        }
        else{
            setStatus(`Jogador atual: ${isPlayer1 ?'X': 'O'}`);
        }
    }, [history, isPlayer1, stepNumber, current])

    const handleClick = (i) =>{
        const new_square = current.board.slice();
        if (new_square[i] || findaWinner(new_square)) {
            return null;
        } else{
            new_square[i] = isPlayer1 ?'X': 'O';
            const new_history = history.concat([{board: new_square}]);
            setHistory(new_history);
            setStepNumber(history.length);
            setIsPlayer1(!isPlayer1);
        }
    }

    return(
        <div className="game">
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div className="game-board">
          <Board onClick={(i) => handleClick(i)}  accessBoard={(i) => current.board[i]}/>
        </div>
      </div>
    );
}