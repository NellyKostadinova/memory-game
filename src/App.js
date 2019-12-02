import React from 'react';
import Images from './components/Images.js';
import Utils from './components/Utils';
import Game from './components/Game';
import './App.css';
import LevelSelect from './components/LevelSelect';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameId: 1,
      gameLevel: 5,
      initArray: Images.initArray,
      arrayToPlay: Images.arrayToPlay
    };
  }

  updateGameLevel = (level) => {
    this.setState({ gameLevel: level }, () => {
      this.createArrayToPlay(this.state.initArray);
      this.resetGame();
    });
  };

  resetGame = () => {
    this.setState({ initArray: Utils.shuffle(this.state.initArray) }, () => {
      this.setState(
        { arrayToPlay: Utils.shorten(this.state.initArray, this.state.gameLevel) },
        () => {
          this.setState({ gameId: this.state.gameId + 1 });
        }
      );
    });
  };

  createArrayToPlay = (arr) => {
    this.setState({ arrayToPlay: Utils.shorten(arr, this.state.gameLevel) });
  };

  shuffleImages = (imgArr) => {
    this.setState({ arrayToPlay: Utils.shuffle(imgArr) });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <p>Get points by clicking on an image but don't click on any more than once!</p>
          <hr />
          <LevelSelect changeHandler={this.updateGameLevel} />
        </header>
        <main>
          <Game
            key={this.state.gameId}
            images={this.state.arrayToPlay}
            shuffleImages={this.shuffleImages}
            resetGame={this.resetGame}
          />
        </main>
      </div>
    );
  }
}

export default App;
