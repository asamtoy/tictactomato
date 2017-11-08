import GameChecker from "../game/GameChecker.js"
import React from "react"
import Square from "./Square.jsx"

class BoardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      gameChecker: new GameChecker(),
      game: [null, null, null, "x", null, null, null, null, null],
      currentPlayer: "X"
    }
  }

  // game = this.state.game
  // game.board[0] = 'x'
  // this.setState({game: game})
  getSquares(){
    const squares = this.state.game.map((square, index) => {
      return (
        <Square square={square} key={index} />
      )
    })
    return squares;
  }


  render(){
    const squares = this.getSquares()
    return (
      <div className="wrapper">
      {squares}
    </div>
    )
  }
}


export default BoardContainer
