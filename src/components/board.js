import React, { Component } from 'react';
import '../components/board.css'
import { connect } from 'react-redux';
import { Image, Segment, Header, Grid, Divider, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "../../node_modules/react-router-dom";

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}
  
class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
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
        )
    }
}

export default Board