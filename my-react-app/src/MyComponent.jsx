import React, { useState, useEffect, useRef } from "react";
import img from "./assets/Asuna.jpg"

const MyComponent = () => {
  let [number, setNumber] = useState(0);

  const ref = useRef(0);

  const inputRef = useRef(null);

  console.log(inputRef);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    // return () => {
    //   console.log("Component will unmount");
    // };
  });

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundImage = `url(${img})`;
  }
  return <div>
    {/* <h1>{number}</h1> */}
    <button onClick={handleClick}>Click me!</button>
    <input ref={inputRef} />
  </div>;
};

export default MyComponent;
