import React from "react";
import ReactDOM from "react-dom";
import CalculatorBody from "../src/components/CalculatorBody";
import { injectGlobal } from "styled-components";

injectGlobal`
 body {
   background-color: #777;
 }
`;

function App() {
  return <CalculatorBody />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
