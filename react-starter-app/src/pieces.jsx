import React, { Component } from "react";

class Pieces extends Component {
  constructor() {
    super();
    this.name = "Mannerson";
  }
  state = {
    part: "huh",
    things: ["thing1", "thing2", "thing3"]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.things.map(thing => (
            <li key={thing}>{thing}</li>
          ))}
        </div>
        <div>{this.state.part}</div>
        <div>{this.name}</div>
      </React.Fragment>
    );
  }
}

export default Pieces;
