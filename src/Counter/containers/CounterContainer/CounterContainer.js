import React, { Component } from "react";
import Counter from "../../components/Counter/Counter";

class CounterContainer extends Component {
  state = {
    count: 0
  };

  handleIncrease = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  render() {
    return (
      <Counter
        count={this.state.count}
        handleIncrease={this.handleIncrease}
        handleDecrease={this.handleDecrease}
      />
    );
  }
}

export default CounterContainer;
