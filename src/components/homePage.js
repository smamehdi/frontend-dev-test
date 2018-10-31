import React, { Component } from 'react';
import Login from '../components/login.js'
import '../App.css';
import { Image, Button, Segment, Modal, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "../../node_modules/react-router-dom";

const src1 = './assets/logo.svg';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, open: false, usernameOne : "" , usernameTwo : "" }
  }
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })
  handleCredits = () => {
      this.setState({redirect : true});
  }
  render() {
    const { open, size } = this.state;
    const { redirect } = this.state;

    if (redirect){
        return (
            <Redirect to='/Credits'/>
        )
    }
    
    return (
        <div className="Homepage">
        <br/>
        <br/>
          <Image src={src1} size='huge' centered />
          <Segment basic textAlign='center'>
            
            <Modal trigger={
              <Button onClick={this.show('tiny')} size='huge' animated='fade' color='teal'>
                <Button.Content visible>New Game</Button.Content>
                <Button.Content hidden>Let's Go!</Button.Content>
              </Button>
              } size={size} open={open} onClose={this.close}>
              <Modal.Header>Choose your usernames!</Modal.Header>
              <Modal.Content>
                  <Login/>
              </Modal.Content>
            </Modal>
            <Button size='huge' animated='fade' onClick={this.handleCredits}  color='teal'>
              <Button.Content visible>Credits</Button.Content>
              <Button.Content hidden>Check Out!</Button.Content>
            </Button>
            <a href="https://www.youtube.com/watch?v=04854XqcfCY">
            <Button size='huge' animated='fade'  color='teal'>
              <Button.Content visible>Quit Game</Button.Content>
              <Button.Content hidden>Don't Quit!</Button.Content>
            </Button>
            </a>
          </Segment>
        </div>
      );
  }
}

export default HomePage;
