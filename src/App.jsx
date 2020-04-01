import React, { Component } from "react";
import MatrixContainer from "./MatrixContainer";

class App extends Component {
  state = { squares: 100 };
  render() {
    return <MatrixContainer value={this.state.squares} />;
  }
}

export default App;
