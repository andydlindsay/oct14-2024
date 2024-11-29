import {useState} from 'react';

const useCounter = (defaultValue) => {
  const [counter, setCounter] = useState(defaultValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(defaultValue);
  };

  const incrementByN = (n) => {
    setCounter(counter + n);
  };

  // return [counter, increment, decrement, reset, incrementByN];
  return { counter, increment, decrement, reset, incrementByN };
};

export default useCounter;
