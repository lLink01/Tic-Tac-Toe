import style from 'styled-components';
export const Box = style.div`
    background: #fff;
    padding: 20px;
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    margin: -1px;
    font-size: 60px;
    &:hover{
        cursor: pointer;
    }
`