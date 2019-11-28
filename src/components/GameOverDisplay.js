import React from 'react';
import '../App.css';

function GameOverDisplay(props) {
  return (
    <div className={'GameOverDisplay ' + props.gameStatus}>
      <h2>{props.gameStatus === 'won' ? 'Nice work!' : 'Game Over!'}</h2>
      <button onClick={props.clickHandler}>Play Again</button>
    </div>
  );
}

export default GameOverDisplay;
