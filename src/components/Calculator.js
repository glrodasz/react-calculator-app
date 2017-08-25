import React, { Component } from 'react';
import '../styles/Calculator.css';

import Key from './Key';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = { currentValue: ''};
  }

  handleClick = (value) => {
    const { currentValue } = this.state;

    return (event) => {
      this.setState({ currentValue: `${currentValue}${value}` });
    }
  }

  render() {
    return (
      <div className="calculator">
      	<div className="top">
          <Key text="CLEAR" className="clear" />
      		<div className="screen">{this.state.currentValue}</div>
      	</div>
      	<div className="keys">
          <Key text={7} handleClick={this.handleClick('7')} />
          <Key text={8} handleClick={this.handleClick('8')} />
          <Key text={9} handleClick={this.handleClick('9')} />
          <Key text="+" className="operator" />
          <Key text={4} />
          <Key text={5} />
          <Key text={6} />
          <Key text="-" className="operator" />
          <Key text={1} />
          <Key text={2} />
          <Key text={3} />
          <Key text="÷" className="operator" />
      		<Key text={0} />
      		<Key text="." />
          <Key text="=" className="eval" />
          <Key text="x" className="operator" />
      	</div>
      </div>
    );
  }
}

export default Calculator;
