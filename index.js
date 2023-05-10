import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Test from './Test';
import './style.css';

const sum = (a, b) => {
  return a + b;
};
const substract = (a, b) => {
  return a - b;
};

const calculator = (type) => {
  if (type == 'sum') {
    return sum;
  } else if (type == 'sub') {
    return substract;
  }
};

const applyBorder = (WrappedComp) => {
  return (props) => {
    return (
      <div class="border">
        <div class="coralBack">
          <h3>Sample Header</h3>
        </div>
        <div class="greenBack">
          <WrappedComp {...props} />
        </div>
        <div class="blueBack">
          <h3>Sample Footer</h3>
        </div>
      </div>
    );
  };
};

const ModifiedHello = applyBorder(Hello);
const ModifiedTest = applyBorder(Test);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Training',
    };
    console.log(calculator('sub')(11, 2));
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />

        <ModifiedHello name="React Training" />
        <ModifiedTest name=" React compo" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
