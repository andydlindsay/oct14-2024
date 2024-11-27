import {useState} from 'react';

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  // stale state => when a variable no longer reflects the latest value
  const clickHandler = () => {
    // setCounter(prev => prev + 1);
    // setCounter(prev => prev + 1);
    setCounter(prev => prev + 3);
  };

  return (
    <div>
      <h2>Visitor Counter</h2>
      <h3>Num Visitors: { counter }</h3>
      <button onClick={clickHandler}>Increment!</button>
    </div>
  );
};

export default VisitorCounter;
