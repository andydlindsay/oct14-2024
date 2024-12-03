import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      internalCount: props.outerCount * 2,
      aNewKey: null,
    };

    this.increment = this.increment.bind(this);
  }

  // increment() {
  increment = () => {
    // console.log('inside the increment', this);
    this.setState({ count: this.state.count + 1 }); 
  }

  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
