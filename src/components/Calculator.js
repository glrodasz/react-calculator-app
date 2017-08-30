import React, { Component } from 'react';
import '../styles/Calculator.css';

import Key from './Key';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = { currentValue: '' };
  }

  appendValueToState = event => {
    const value = event.currentTarget.dataset.text;
    this.setState({ currentValue: `${this.state.currentValue}${value}` });
  };

  evalCurrentState = event => {
    const { currentValue } = this.state;
    this.setState({ currentValue: eval(currentValue.replace(/÷/g, '/').replace(/x/g, '*')) });
  }

  clearCurrentState = event => {
    this.setState({ currentValue: '' });
  }

  render() {
    return (
      <div className="calculator">
        <div className="top">
          <Key text="CLEAR" handleClick={this.clearCurrentState} type="clear" />
          <div className="screen">
            {this.state.currentValue}
          </div>
        </div>
        <div className="keys">
          <Key text={7} handleClick={this.appendValueToState} />
          <Key text={8} handleClick={this.appendValueToState} />
          <Key text={9} handleClick={this.appendValueToState} />
          <Key text="+" handleClick={this.appendValueToState} type="operator" />
          <Key text={4} handleClick={this.appendValueToState} />
          <Key text={5} handleClick={this.appendValueToState} />
          <Key text={6} handleClick={this.appendValueToState} />
          <Key text="-" handleClick={this.appendValueToState} type="operator" />
          <Key text={1} handleClick={this.appendValueToState} />
          <Key text={2} handleClick={this.appendValueToState} />
          <Key text={3} handleClick={this.appendValueToState} />
          <Key text="÷" handleClick={this.appendValueToState} type="operator" />
          <Key text={0} handleClick={this.appendValueToState} />
          <Key text="." handleClick={this.appendValueToState} />
          <Key text="=" handleClick={this.evalCurrentState} type="eval" />
          <Key text="x" handleClick={this.appendValueToState} type="operator" />
        </div>
      </div>
    );
  }
}

export default Calculator;
