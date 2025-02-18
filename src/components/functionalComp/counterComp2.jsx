import React, { useState } from 'react';

const Controller = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count <= 0) {
        alert("Count can't be negative.");
        return;
    } else {
        setCount(count - 1);
    }
  };

  return (
    <div>
        <h1>This is a increment and decrement component.</h1>
        <h3>Count: {count}</h3>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Controller;
