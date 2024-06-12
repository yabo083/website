import React, { useContext } from "react";

import { UserContext } from "./ComponentA";

const ComponentD = () => {
  const user = useContext(UserContext);
  return (
    <div className="border-4 border-black">
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
};

export default ComponentD;
