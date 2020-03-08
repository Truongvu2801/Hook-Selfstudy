import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(10);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 2)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <div>{count}</div>
    </div>
  );
};

export default App;
