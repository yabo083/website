import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    return () => {
      document.title = "React App";
    };
  }, [color, count]);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const subtractCount = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  return (
    <div>
      <h1>My Component</h1>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default MyComponent;
