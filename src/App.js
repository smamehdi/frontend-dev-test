import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import {addToFavorite} from './store/actions/index';

const mapStateToProps = function(state,props) {
  return {}
}

const mapDispatchToProps = dispatch => ({
  addToFavorite: (data) => dispatch(addToFavorite(data))
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={() => {this.props.addToFavorite('ypypyp')}}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
