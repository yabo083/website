import { useState } from "react";
import React from "react";

const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    setCars((prevCars) => [
      ...prevCars,
      {
        year: carYear,
        make: carMake,
        model: carModel,
      },
    ]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const hanldeRemoveCar = (index) => {
    setCars((prevCars) => prevCars.filter((_, i) => i !== index));
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => hanldeRemoveCar(index)}>
            {car.year} {car.make} {car.model}{" "}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default MyComponent;
