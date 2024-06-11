import React, { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementInterval = useRef(null);
  const decrementInterval = useRef(null);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const startIncrement = () => {
    incrementInterval.current = setInterval(increment, 100);
  };

  const stopIncrement = () => {
    clearInterval(incrementInterval.current);
  };

  const startDecrement = () => {
    decrementInterval.current = setInterval(decrement, 100);
  };

  const stopDecrement = () => {
    clearInterval(decrementInterval.current);
  };

  return (
    <div className="flex flex-col items-center border-4 border-solid rounded-lg outline outline-offset-2 outline-cyan-500 w-[400px] ">
      <h1 className="m-6">Counter</h1>
      <p className="m-6 text-4xl font-bold text-blue-500 shadow-lg bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300 p-2 rounded-lg">{count}</p>
      <div className="flex justify-center space-x-4 m-10">
        <button 
          onMouseDown={startIncrement} 
          onMouseUp={stopIncrement} 
          onMouseLeave={stopIncrement}
          onTouchStart={startIncrement} 
          onTouchEnd={stopIncrement}>
          Increment
        </button>
        <button 
          onMouseDown={startDecrement} 
          onMouseUp={stopDecrement} 
          onMouseLeave={stopDecrement}
          onTouchStart={startDecrement} 
          onTouchEnd={stopDecrement}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;