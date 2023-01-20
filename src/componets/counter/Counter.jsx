import { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    startValue: this.props.value,
  };

  incValue = () => {
    console.log("+++");
    this.setState((prevState) => ({
      startValue: prevState.startValue + 1,
    }));
  };

  decrValue = () => {
    this.setState((prevState) => ({
      startValue: prevState.startValue - 1,
    }));
  };

  random = () => {
    this.setState({
      startValue: +(Math.random() * (50 - -50) + -50).toFixed(0),
    });
  };

  reset = () => {
    this.setState({
      startValue: this.props.value,
    });
  };
  render() {
    const { value } = this.props;
    const { startValue } = this.state;
    return (
      <div class="wrapper">
        <div class="counter">{startValue}</div>
        <div class="controls">
          <button onClick={this.incValue}>INC</button>
          <button onClick={this.decrValue}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    );
  }
}

export default Counter;
