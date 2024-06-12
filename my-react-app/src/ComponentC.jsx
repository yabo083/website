import ComponentD from "./ComponentD";
import React, { useContext } from "react";

import { UserContext } from "./ComponentA.jsx";
const ComponentC = () => {
  const user = useContext(UserContext);

  return (
    <div className="border-4 border-black">
      <h1>Component C</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
