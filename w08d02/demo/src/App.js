import './App.css';

import {useState} from 'react';

// import ClassBased from './components/ClassBased';
// import Counter from './components/Counter';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-based Components</h2>
      <button onClick={() => setShowLifecycle(!showLifecycle)}>Click me</button>
      {/* <ClassBased message="hello world" age={42}></ClassBased> */}
      {/* <Counter outerCount={100}/> */}
      { showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;
