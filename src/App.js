import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExampleComponent from "./ExampleComponent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ExampleComponent />
        </header>
      </div>
    );
  }
}

export default App;
