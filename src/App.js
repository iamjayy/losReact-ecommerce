import React from "react";
import "./App.css";
import city from "../src/img/city.jpeg";

function App() {
  return (
    <div className="App">
      <h1>my react app</h1>
      <h2>testing app</h2>
      <img src={city} alt="city" />
    </div>
  );
}

export default App;
