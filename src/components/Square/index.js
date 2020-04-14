import React from 'react';
import { Box } from "./style";
export default (props) => {
    return(
    <Box onClick={() => props.onClick()} isHighlighted={props.isHighlighted()}>{props.value}</Box>
    );
}