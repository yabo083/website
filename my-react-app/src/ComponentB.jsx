import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div className="border-4 border-black">
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
