import React, { Component } from 'react';
import Calculator from './Calculator';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <main className="app">
        <h1>React Calculator App</h1>
        <Calculator />
      </main>
    );
  }
}

export default App;
