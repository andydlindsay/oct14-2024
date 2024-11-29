// import {useState} from 'react';
import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const [counter, decrement, increment, reset, incrementByN] = useCounter(42);
  const { counter, decrement, increment } = useCounter(42);

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => incrementByN(10)}>+10</button>
      <button onClick={() => incrementByN(-5)}>-5</button>
    </div>
  );
};

export default Counter;
