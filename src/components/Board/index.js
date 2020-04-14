import React from 'react';
import Square from "../Square";
import { Container } from "./style";
export default (props) =>{

    const renderSquare = (i) => {
        return (<Square value={props.accessBoard(i)}
            onClick={() => props.onClick(i)} isHighlighted={() => props.isHighlighted(i)} />);
    };
    
    return (
        <Container>
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