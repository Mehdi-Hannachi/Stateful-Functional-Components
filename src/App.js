import "./App.css";
import React, { Component } from "react";
import ClassComp from "./components/ClassComp";
import FunctionalComp from "./components/FunctionalComp";

export default class App extends Component {
  state = {
    show: false,
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"} Component
        </button>
        {this.state.show ? (
          <div>
            <ClassComp />
            <FunctionalComp />
          </div>
        ) : null}
      </div>
    );
  }
}
