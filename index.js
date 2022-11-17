import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }

  function decrease(){
    setCounter(counter-1);
  }

  function reset(){
    setCounter(0);
  }

  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increase</button>
  <button onClick={decrease}>Decrease</button>
  <button onClick={reset}>Reset</button>
  </div>;
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);