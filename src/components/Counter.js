import React, { useState } from "react";

function Counter({ onAdd }) {
  const [count, setCount] = useState(0); 

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1); 
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count); 
      setCount(0);  
    }
  };

  return (
    <div>
      <div className="counter-label">Counter</div>
      <div className="counter-controls">
        <button className="circle-btn" onClick={handleDecrement}>-</button>
        <span className="count-value">{count}</span>
        <button className="circle-btn" onClick={handleIncrement}>+</button>
      </div>
      <button
        className="add-btn"
        onClick={handleAdd}
        disabled={count === 0}
        style={{ width: "100%" }}
      >
        Add to List
      </button>
    </div>
  );
}

export default Counter;

