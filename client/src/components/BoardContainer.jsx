import GameChecker from "../game/GameChecker.js"
import React from "react"
import Square from "./Square.jsx"

class BoardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      gameChecker: new GameChecker(),
      game: [null, null, null, null, null, null, null, null, null],
      currentPlayer: "X",
      winner: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.startNewRound = this.startNewRound.bind(this)
  }

  handleClick(index){
    console.log(index);
    const newArray = this.state.game
    newArray[index] = this.state.currentPlayer;
    this.setState({game: newArray})
    this.declareWinner()
    this.nextPlayer()
  }

  declareWinner(){
    var winner = this.state.gameChecker.win(this.state.game)
    if (winner){
      console.log("winner", winner)
      this.setState({winner: winner})
    }

  }

  startNewRound(){
    this.setState({
      gameChecker: new GameChecker(),
      game: [null, null, null, null, null, null, null, null, null],
      currentPlayer: "X",
      winner: null})
  }

  nextPlayer() {
    if (this.state.currentPlayer === "X"){
      this.setState({currentPlayer: "O"})
    } else {
      this.setState({currentPlayer: "X"})

    }
  }

  // game = this.state.game
  // game.board[0] = 'x'
  // this.setState({game: game})
  getSquares(){
    const squares = this.state.game.map((square, index) => {
      return (
        <Square square={square}
          key={index}
          index={index}
          onSquareClick={this.handleClick}
        />
      )
    })
    return squares;
  }


  render(){
    const squares = this.getSquares()
    if (this.state.winner){
      return (
        <div>
          <div className="wrapper">
          {squares}
          </div>
            <h1>The winner is {this.state.winner}</h1>
            <button onClick={this.startNewRound}>New Game</button>
        </div>
      )
    } else {
      return (
        <div className="wrapper">
        {squares}
      </div>
      )
    }
  }
}


export default BoardContainer
