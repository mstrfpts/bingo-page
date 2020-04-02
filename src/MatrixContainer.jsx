import React, { Component } from "react";
import Square from "./Square";
import "./MatrixContainer.css";
import _ from "lodash";

export default class MatrixContainer extends Component {
  state = {
    defaultNumbers: Array.from(Array(99).keys(), number => number + 1),
    notYetSelectedNumbers: Array.from(Array(99).keys(), number => number + 1),
    selectedNumbers: ["--"],
    allSelected: false,
    arraySize: 99
  };

  generateNewNumber = () => {
    let newNumber = Math.floor(Math.random() * this.state.arraySize);
    let splicedNumber = this.state.notYetSelectedNumbers.splice(newNumber, 1);
    this.setState({
      selectedNumbers: [...this.state.selectedNumbers, splicedNumber[0]],
      arraySize: this.state.notYetSelectedNumbers.length,
      allSelected: this.state.notYetSelectedNumbers.length === 0 ? true : false
    });
  };

  render() {
    return (
      <div className={"root"}>
        <div className={"Header"}>Bingo Time</div>
        <button
          onClick={this.generateNewNumber}
          disabled={this.state.allSelected}
        >
          Generate Next Number
        </button>

        <div className={"CurrentNumber"}>
          <Square
            value={
              this.state.selectedNumbers[this.state.selectedNumbers.length - 1]
            }
            selected={true}
          />
        </div>
        <div className={"MatrixContainer"}>
          {_.map(this.state.defaultNumbers, number => {
            return (
              <Square
                value={number}
                key={number}
                selected={this.state.selectedNumbers.includes(number)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
