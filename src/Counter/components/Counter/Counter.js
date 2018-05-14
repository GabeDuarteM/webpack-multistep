import React from "react";
import { Link } from "react-router-dom";

const Counter = ({ count, handleIncrease, handleDecrease }) => {
  return (
    <div>
      {count}
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Counter;
