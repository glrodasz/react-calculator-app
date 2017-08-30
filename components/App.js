import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <main className="app">
        <h1>React Calculator App</h1>
        <Calculator />
        <style global jsx>{`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            height: 100%;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
            min-height: 100%;
            background: #ecf0f1;
            color: #2c3e50;
          }

          .app {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 30px auto;
          }

          .app h1 {
            text-transform: uppercase;
            font-weight: 600;
          }
        `}</style>
      </main>
    );
  }
}

export default App;
