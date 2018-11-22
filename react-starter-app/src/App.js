import React, { Component } from "react";
import Pieces from "./pieces";

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>
          <Pieces />
        </h1>
      </main>
    );
  }
}

export default App;
