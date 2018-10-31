import React, { Component } from 'react';
import HomePage from './components/homePage.js'
import NewGame from './components/newGame.js'
import Credits from './components/credits.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "../node_modules/react-router-dom";


const src1 = './assets/logo.svg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, usernameOne : "" , usernameTwo : "" }
  }
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })
  /*renderNewGame = (routerData) => {
    let users = routerData.match.params.usernames.split("&")
    this.setState({ usernameOne : users[0], usernameTwo :users[1]})
    return (
      <div>
        <NewGame usernameOne = {this.state.usernameOne} usernameTwo = {this.state.usernameTwo} />
      </div>
    )
  }*/
  render() {
    const { open, size } = this.state
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Credits" component={Credits} />
            <Route exact path='/newGame/:usernames' component={NewGame}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
