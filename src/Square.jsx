import React, { Component } from "react";
import "./MatrixContainer.css";

export default class Square extends Component {
  render() {
    return (
      <div className={this.props.selected ? "selectedSquare" : "Square"}>
        {this.props.value}
      </div>
    );
  }
}
