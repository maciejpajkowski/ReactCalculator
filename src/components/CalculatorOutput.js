import React from "react";
import styled from "styled-components";

const CalculatorOutputContainer = styled.div`
  box-sizing: border-box;
  background-color: #222;
  width: 90%;
  height: 60px;
  margin: 15px;
  font-size: 28px;
  font-family: "Consolas";
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 0;
  padding: 10px;
`;

const CalculatorOutput = props => (
  <CalculatorOutputContainer>{props.children}</CalculatorOutputContainer>
);

export default CalculatorOutput;
