import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Counter: {counter}
    </button>
  );
}

const root = document.getElementById("root");

render(<App />, root);
