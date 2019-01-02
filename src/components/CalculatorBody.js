import React from "react";
import styled from "styled-components";
import CalculatorOutput from "./CalculatorOutput";
import CalculatorButton from "./CalculatorButton";

const CalculatorBodyContainer = styled.div`
  box-sizing: border-box;
  box-shadow: 0 5px 20px 1px #555;
  background-color: #323232;
  border-top: 2px solid #21ff91;
  color: #fff;
  margin: 15% auto;
  width: 320px;
  height: 480px;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-directon: row;
    flex-wrap: wrap;
    margin: 15px;
  }
`;

export default class CalculatorBody extends React.Component {
  state = {
    currentNumber: "0",
    number1: 0,
    number2: 0,
    operator: "",
    gotOperator: false,
    firstCalculation: true
  };

  getNumber = num => {
    if (this.state.currentNumber === "0") {
      this.setState({
        currentNumber: num
      });
    } else if (this.state.currentNumber.length < 15 && this.state.gotOperator) {
      console.log("gotOperator is:", this.state.gotOperator);
      this.setState(
        {
          gotOperator: false,
          currentNumber: `${num}`
        },
        () =>
          console.log(
            "gotOperator:",
            this.state.gotOperator,
            "currentNumber:",
            this.state.currentNumber
          )
      );
    } else if (
      this.state.currentNumber.length < 15 &&
      !this.state.gotOperator
    ) {
      this.setState({
        currentNumber: this.state.currentNumber + `${num}`
      });
    }
  };

  clear = () => {
    this.setState({
      currentNumber: "0",
      number1: 0,
      number2: 0,
      operator: "",
      gotOperator: false,
      firstCalculation: true
    });
  };

  getOperator = operator => {
    this.setState(
      {
        number1: parseFloat(this.state.currentNumber),
        operator,
        gotOperator: true,
        firstCalculation: true
      },
      () => console.log("Current operator is", this.state.operator)
    );
  };

  addPoint = () => {
    if (this.state.currentNumber.indexOf(".") === -1) {
      this.setState({
        currentNumber: this.state.currentNumber + "."
      });
    } else {
      this.setState({
        currentNumber: `${parseFloat(this.state.currentNumber).toFixed(0)}`
      });
    }
  };

  calculatePercent = () => {
    this.setState({
      currentNumber: `${parseFloat(this.state.currentNumber) / 100}`
    });
  };

  calculateResult = () => {
    if (this.state.operator === "+") {
      if (this.state.firstCalculation) {
        this.setState({
          number2: parseFloat(this.state.currentNumber),
          firstCalculation: false
        });
      } else {
        this.setState({
          number1: parseFloat(this.state.currentNumber)
        });
      }

      this.setState(state => ({
        currentNumber: `${state.number1 + state.number2}`
      }));
    }
    if (this.state.operator === "-") {
      if (this.state.firstCalculation) {
        this.setState({
          number2: parseFloat(this.state.currentNumber),
          firstCalculation: false
        });
      } else {
        this.setState({
          number1: parseFloat(this.state.currentNumber)
        });
      }

      this.setState(state => ({
        currentNumber: `${state.number1 - state.number2}`
      }));
    }
    if (this.state.operator === "/") {
      if (this.state.firstCalculation) {
        this.setState({
          number2: parseFloat(this.state.currentNumber),
          firstCalculation: false
        });
      } else {
        this.setState({
          number1: parseFloat(this.state.currentNumber)
        });
      }

      this.setState(state => ({
        currentNumber: `${state.number1 / state.number2}`
      }));
    }
    if (this.state.operator === "*") {
      if (this.state.firstCalculation) {
        this.setState({
          number2: parseFloat(this.state.currentNumber),
          firstCalculation: false
        });
      } else {
        this.setState({
          number1: parseFloat(this.state.currentNumber)
        });
      }

      this.setState(state => ({
        currentNumber: `${state.number1 * state.number2}`
      }));
    }
  };

  render() {
    return (
      <CalculatorBodyContainer>
        <CalculatorOutput>{this.state.currentNumber}</CalculatorOutput>
        <section>
          <CalculatorButton symbol="1" getNumber={this.getNumber} num />
          <CalculatorButton symbol="2" getNumber={this.getNumber} num />
          <CalculatorButton symbol="3" getNumber={this.getNumber} num />
          <CalculatorButton symbol="C" clear={this.clear} clearButton />
          <CalculatorButton symbol="4" getNumber={this.getNumber} num />
          <CalculatorButton symbol="5" getNumber={this.getNumber} num />
          <CalculatorButton symbol="6" getNumber={this.getNumber} num />
          <CalculatorButton
            symbol="+"
            getOperator={this.getOperator}
            operator
          />
          <CalculatorButton symbol="7" getNumber={this.getNumber} num />
          <CalculatorButton symbol="8" getNumber={this.getNumber} num />
          <CalculatorButton symbol="9" getNumber={this.getNumber} num />
          <CalculatorButton
            symbol="-"
            getOperator={this.getOperator}
            operator
          />
          <CalculatorButton symbol="0" getNumber={this.getNumber} num0 />
          <CalculatorButton symbol="." addPoint={this.addPoint} dot />
          <CalculatorButton
            symbol="*"
            getOperator={this.getOperator}
            operator
          />
          <CalculatorButton
            symbol="="
            calculateResult={this.calculateResult}
            calculate
          />
          <CalculatorButton
            symbol="/"
            getOperator={this.getOperator}
            operator
          />
          <CalculatorButton
            symbol="%"
            calculatePercent={this.calculatePercent}
            percent
          />
        </section>
      </CalculatorBodyContainer>
    );
  }
}
