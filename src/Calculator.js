import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <input id="numberInput" value="" />
        <div className="calculator-keys">
          <div className="calculator-key">0</div>
          <div className="calculator-key">1</div>
          <div className="calculator-key">2</div>
          <div className="calculator-key">3</div>
          <div className="calculator-key">4</div>
          <div className="calculator-key">5</div>
          <div className="calculator-key">6</div>
          <div className="calculator-key">7</div>
          <div className="calculator-key">8</div>
          <div className="calculator-key">9</div>
        </div>
        <div className="calculator-operators">
          <div className="calculator-key">+</div>
          <div className="calculator-key">-</div>
          <div className="calculator-key">*</div>
          <div className="calculator-key">/</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
