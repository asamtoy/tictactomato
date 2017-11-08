import React from "react"

class Square extends React.Component{


  render() {
    return (
      <p onClick={(e) => {this.props.onSquareClick(this.props.index)}}>
        {this.props.square}
      </p>
    )
  }
}

export default Square
