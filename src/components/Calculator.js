import React, { Component } from 'react';
import '../styles/Calculator.css';

import Key from './Key';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = { currentValue: '' };
  }

  appendValue = event => {
    const value = event.currentTarget.dataset.text;
    this.setState({ currentValue: `${this.state.currentValue}${value}` });
  };

  render() {
    return (
      <div className="calculator">
        <div className="top">
          <Key text="CLEAR" handleClick={this.appendValue} type="clear" />
          <div className="screen">
            {this.state.currentValue}
          </div>
        </div>
        <div className="keys">
          <Key text={7} handleClick={this.appendValue} />
          <Key text={8} handleClick={this.appendValue} />
          <Key text={9} handleClick={this.appendValue} />
          <Key text="+" handleClick={this.appendValue} type="operator" />
          <Key text={4} handleClick={this.appendValue} />
          <Key text={5} handleClick={this.appendValue} />
          <Key text={6} handleClick={this.appendValue} />
          <Key text="-" handleClick={this.appendValue} type="operator" />
          <Key text={1} handleClick={this.appendValue} />
          <Key text={2} handleClick={this.appendValue} />
          <Key text={3} handleClick={this.appendValue} />
          <Key text="÷" handleClick={this.appendValue} type="operator" />
          <Key text={0} handleClick={this.appendValue} />
          <Key text="." handleClick={this.appendValue} />
          <Key text="=" handleClick={this.appendValue} type="eval" />
          <Key text="x" handleClick={this.appendValue} type="operator" />
        </div>
      </div>
    );
  }
}

export default Calculator;
