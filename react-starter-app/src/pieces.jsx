import React, { Component } from "react";

class Pieces extends Component {
  constructor() {
    super();
  }
  state = {
    part: "huh",
    things: ["thing1", "thing2", "thing3"],
    name: "Mannerson"
  };

  flipName = () => {
    let newState = { ...this.state };
    newState.name = "Linny Pinkerson";
    return this.setState({ newState });
  };

  render() {
    setTimeout(() => {
      this.setState({ name: "Bob" });
    }, 1050);
    return (
      <React.Fragment>
        <div>
          {this.state.things.map(thing => (
            <li key={thing}>{thing}</li>
          ))}
        </div>
        <div>{this.state.part}</div>
        <button onClick={this.flipName}>{this.state.name}</button>
      </React.Fragment>
    );
  }
}

export default Pieces;
