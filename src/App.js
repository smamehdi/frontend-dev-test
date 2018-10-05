import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = function(state,props) {
  return {}
}

const mapDispatchToProps = dispatch => ({
  
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">A Tic Tac Toe Game will be created</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
