import { Component } from "react";

class ClassComp extends Component {
  _isMounted = true;
  state = {
    count: 0,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => {
      if (this._isMounted) {
        this.setState({ timer: this.state.timer + 1 });
      }
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Updating");
    // return alert("Updating");
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>Class Component</h1>

        <button onClick={this.increment}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>

        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default ClassComp;
