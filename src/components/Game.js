import React from 'react';
import ScoreDisplay from './ScoreDisplay';
import ImagesList from './ImagesList';
import GameOverDisplay from './GameOverDisplay';
import '../App.css';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      gameStatus: 'active'
    };
  }

  cardIsClicked = (cardIsPlayable) => {
    if (cardIsPlayable) {
      this.setState({ score: this.state.score + 1 }, () => {
        this.props.images.length === this.state.score
          ? this.setState({ gameStatus: 'won' })
          : this.props.shuffleImages(this.props.images);
      });
    } else {
      this.setState({ gameStatus: 'lost' });
    }
  };

  render() {
    return (
      <div className="Game">
        <ScoreDisplay score={this.state.score} />
        {this.state.gameStatus === 'active' ? (
          <ImagesList images={this.props.images} cardClickHandler={this.cardIsClicked} />
        ) : (
          <GameOverDisplay clickHandler={this.props.resetGame} gameStatus={this.state.gameStatus} />
        )}
      </div>
    );
  }
}

export default Game;
