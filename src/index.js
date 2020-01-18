import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//REACT Component ====================
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* value from Game is now passed via props to square and displayed here. */}
        {this.props.value}
      </button>
    );
  }
}

//REACT Component ====================
class Board extends React.Component {
  renderSquare(i) {
    //GAME passes a prop called value to this square component.
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//REACT Component ====================
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
