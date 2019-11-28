import React from 'react';
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
      initArray: [],
      arrayToPlay: []
    };
  }

  componentDidMount() {
    fetch('http://www.splashbase.co/api/v1/images/latest')
      .then((response) => response.json())
      .then((fetchedImgs) => {
        this.setState({ initArray: fetchedImgs.images }, () => {
          this.createArrayToPlay(this.state.initArray);
        });
      });
  }

  updateGameLevel = (level) => {
    this.setState({ gameLevel: level }, () => {
      this.createArrayToPlay(this.state.initArray);
      this.resetGame();
    });
  };

  resetGame = () => {
    this.setState({ gameId: this.state.gameId + 1 });
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
