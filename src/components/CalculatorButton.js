import React from "react";
import styled from "styled-components";

const CalculatorButtonContainer = styled.div`
  margin: 0 15px 15px 0px;

  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(12),
  &:nth-child(15),
  &:nth-child(18) {
    margin: 0 0 15px 0;
  }

  &:nth-child(10) {
    margin: 0 15px 15px 0;
  }

  button {
    background-color: transparent;
    color: #fff;
    height: 60px;
    width: 60px;
    display: flex;
    border: 0;
    box-shadow: 0 0 2px 3px #181818;
    border-top: 1px solid #21ff91;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: "Consolas";
    float: left;
    transition: all 0.3s;

    &.wide {
      width: 135px;
    }

    &:hover {
      cursor: pointer;
      background-color: #222;
    }

    &:active {
      box-shadow: none;
      background-color: #151515;
    }

    &:focus {
      outline: none;
    }
  }
`;

const CalculatorButton = props => (
  <CalculatorButtonContainer>
    {props.num && (
      <button onClick={() => props.getNumber(props.symbol)}>
        {props.symbol}
      </button>
    )}
    {props.num0 && (
      <button className="wide" onClick={() => props.getNumber(props.symbol)}>
        {props.symbol}
      </button>
    )}
    {props.clearButton && (
      <button onClick={() => props.clear()}>{props.symbol}</button>
    )}
    {props.operator && (
      <button onClick={() => props.getOperator(props.symbol)}>
        {props.symbol}
      </button>
    )}
    {props.calculate && (
      <button className="wide" onClick={() => props.calculateResult()}>
        {props.symbol}
      </button>
    )}
    {props.dot && (
      <button onClick={() => props.addPoint()}>{props.symbol}</button>
    )}
    {props.percent && (
      <button onClick={() => props.calculatePercent()}>{props.symbol}</button>
    )}
  </CalculatorButtonContainer>
);

export default CalculatorButton;
