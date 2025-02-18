import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1>This is a counter component.</h1>
        <h3>Count: {count}</h3>
        <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
