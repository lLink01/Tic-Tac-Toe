import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './css';
import Game from './components/Game';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
