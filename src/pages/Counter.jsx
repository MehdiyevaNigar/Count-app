import React, { useState } from "react";
import "./Counter.style.css";
import { Button } from "../components/Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <Button label="+" onClick={increment} />
      <p>{count}</p>
      <Button label="-" onClick={decrement} />
    </div>
  );
};

export default Counter;
