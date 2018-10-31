import React, { Component } from 'react';
import Board from '../components/board.js'
import { connect } from 'react-redux';
import { Image, Segment, Header, Grid, Divider, Button, Modal, Input} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../App.css'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "../../node_modules/react-router-dom";

const src1 = '../../assets/logo.svg';
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}
class NewGame extends Component {
    constructor(props){
        super(props);
        this.state = { 
            usernameOne : this.props.location.state.usernameOne, 
            usernameTwo: this.props.location.state.usernameTwo,
            history: [
                {
                  squares: Array(9).fill(null)
                }
              ],
            stepNumber: 0,
            xIsNext: true,
            open: true
        }
    }
    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
      }
    

    close = () => {this.setState({ open: false })}
    closeRepeat = () => {
        this.setState({ open: false });
        this.jumpTo(0);
    }
    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
          history: history.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext
        });
    }
    jumpTo = (step) => {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
          open: true
        });
    }
    render() {
        const { open, closeOnEscape, closeOnDimmerClick } = this.state

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        
        const moves = history.map((step, move) => {
          return (
              <Button color='teal' onClick={() => this.jumpTo(move)}>
                    <Button.Content>
                        Restart Game
                    </Button.Content>
                </Button>
          );
        });
    
        let status;
        if (winner) {
            this.closeConfigShow(true, false);
            status = (<Modal
            open={open}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={this.close}
            basic
            size='small'
            >
                <Header icon='trophy' content='Game Over' />
                <Modal.Content>
                    <p>Victory to Player {winner}!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Link to={'/'}>
                        <Button 
                        onClick={this.close} 
                        color='red'
                        inverted
                        >
                            Quit Game
                        </Button>
                    </Link>
                    <Button
                    onClick={this.closeRepeat}
                    color='green'
                    inverted
                    >
                        Restart Game
                    </Button>
                </Modal.Actions>
            </Modal>)
        } else {
          status = (<div><Header inverted>Player {this.state.xIsNext ? "X" : "O"}'s turn!</Header></div>);
        }
        return (
            <div className="NewGame">
                <Segment inverted>
                    <Grid columns={4} stackable textAlign='center'>
                    

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                        <Image src={src1} size='medium' centered />
                        </Grid.Column>
                        <Grid.Column>
                        <Header color='teal'>
                            Player X : {this.state.usernameOne}
                        </Header>
                        <Header color='teal'>
                            Player O : {this.state.usernameTwo}
                        </Header>
                        </Grid.Column>
                        <Grid.Column>
                        <Link to={'/'}><Button color='teal'>Back to Homepage</Button></Link>
                        <br/>
                        <br/>
                        {moves[0]}
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Segment>
                <Segment inverted textAlign='center'>
                            <div className="game-board">
                                <Board
                                squares={current.squares}
                                onClick={i => this.handleClick(i)}
                                />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className="game-info">
                                {status}
                            </div>
                </Segment>

            </div>
        )
    }
}

export default NewGame

