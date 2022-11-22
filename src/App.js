import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setnumber] = useState(0);

  function increase() {
    setnumber(number + 1);
  }

  function decrease() {
    setnumber(number - 1);
  }

  return (
    <div className="App">
      <div className="container">
        <button onClick={increase} className="add">
          Increase
        </button>
        <h1>{number}</h1>
        <button onClick={decrease} className="minus">
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
