import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Go to work",
    "Go to sleep",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
        setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
          setTasks(updatedTasks);
      }
  };

  return (
    <div className="text-center mt-[100px]">
      <h1 className="text-6xl">To-Do-List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className="bg-green-500 hover:bg-green-700" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="flex-1">{task}</span>
            <button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button onClick={() => moveTaskUp(index)}>👆</button>
            <button onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
