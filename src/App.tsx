import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { LiteProvider } from "./reduxLite";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LiteProvider>
          <Counter name="Counter 1" />
          <Counter name="Counter 2" />
        </LiteProvider>
      </header>
    </div>
  );
}

export default App;
