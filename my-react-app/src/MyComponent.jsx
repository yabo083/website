import { useState } from "react";
import React from "react";

const MyComponent = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    // const newFoods = [...foods];
    // newFoods.splice(index, 1);
    // setFoods(newFoods);

    setFoods(f => f.filter((_, i) => i !== index)) // better!
  };

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li className="cursor-pointer" key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default MyComponent;
