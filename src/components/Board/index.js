import React,{useState} from 'react';
import Square from "../Square";
import { Container } from "./style";
import findaWinner from "../../services/findaWinner";
export default () =>{
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isPlayer1, setIsPlayer1] = useState(true);
    const [status, setStatus] = useState(`Próximo jogador: ${isPlayer1 ?'X': 'O'}`);
    const renderSquare = (i) => {
        return (<Square value={board[i]}
            onClick={() => handleClick(i)} />);
    };
    const handleClick = (i) =>{
        const new_square = board.slice();
        new_square[i] = isPlayer1 ?'X': 'O';
        setBoard(new_square);
        const winner = findaWinner(new_square);
        
         winner ? setStatus(`Vencedor: ${winner}`) : setIsPlayer1(!isPlayer1)
    }
    return (
        <Container>
        <h1>{status}</h1>
        <div>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </Container>
    );
}