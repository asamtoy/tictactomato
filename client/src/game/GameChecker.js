class GameChecker {
  constructor(){
    this.squares = [];
    for(var i=0; i<9; i++){
      this.squares.push(null)
    }
    this.currentPlayer = "X"
  }

  addMove(position){
    this.squares[position] = this.currentPlayer;
    this.nextPlayer()
  }

  nextPlayer() {
    if (this.currentPlayer === "X"){
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X"
    }
  }
  win(squares){
    if (squares[0] !== null){
      if(squares[0] === squares[1] && squares[1] === squares[2]){
        return squares[0]
      }
      if(squares[0] === squares[3] && squares[3] === squares[6]){
        return squares[0]
      }
      if(squares[0] === squares[4] && squares[4] === squares[8]){
        return squares[0]
      }
    }


    if (squares[4] !== null){
      if(squares[3] === squares[4] && squares[4] === squares[5]){
        return squares[3]
      }
      if(squares[1] === squares[4] && squares[4] === squares[7]){
        return squares[1]
      }
      if(squares[2] === squares[4] && squares[4] === squares[6]){
        return squares[2]
      }
    }

    if (squares[8] !== null){
      if(squares[6] === squares[7] && squares[7] === squares[8]){
        return squares[6]
      }
      if(squares[2] === squares[5] && squares[5] === squares[8]){
        return squares[2]
      }
    }
  }

}
//
// var newGame = new Game();
// console.log(newGame);
//
// newGame.addMove(0)
// console.log(newGame);
// newGame.addMove(3)
// console.log(newGame);
// newGame.addMove(1)
// console.log(newGame);
// newGame.addMove(4)
// console.log(newGame);
// newGame.addMove(2)
// console.log(newGame);
// var winner = newGame.win();
// console.log("the winner is", winner)
// Create an array with nine spaces, each of which starts as null and can change
// with an onClick.
// OnClicks alternate, x and o, starting with X.
//

export default GameChecker;
