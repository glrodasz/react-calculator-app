import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Calculator App</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
