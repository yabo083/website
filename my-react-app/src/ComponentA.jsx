import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("Yabo");
  return (
    <div className="border-4 border-black">
      <h1>Component A</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
