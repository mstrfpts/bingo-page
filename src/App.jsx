import React, { Component } from "react";
import MatrixContainer from "./MatrixContainer";
import "./MatrixContainer.css";

class App extends Component {
  state = { squares: 100 };
  render() {
    return (
      <div>
        <MatrixContainer value={this.state.squares} />
        <div>
          <p>
            Note: Do not refresh. Refreshing the page will reset the numbers
            generated.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
