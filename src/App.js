import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Atom Keyboard Shortcut List
          </p>
          <Timer start={Date.now()}/>
        </header>
      </div>
    );
  }
}

export default App;
