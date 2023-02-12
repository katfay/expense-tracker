require("dotenv").config();
import React from "react";
import ReactDOM from "react-dom";

import "./src/App.css";

function App() {
  let temperature = 19;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>The temperature is {temperature}</h2>
    </div>
  );
}

const root = ReactDOM(document.getElementById("root"));
root.render(<App />);
