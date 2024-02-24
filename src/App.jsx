import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

import { FaRegPenToSquare } from "react-icons/fa6";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleEditTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">My Todo App</h1>
      <form
        className="mb-4 flex"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          onClick={handleAddTask}
          className="bg-blue-500 text-center text-white font-bold px-4 py-2 ml-2 text-xl rounded hover:bg-blue-600 focus:outline-none"
        >
          <IoAddCircleOutline />
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b py-2 hover:bg-gray-100"
          >
            <span>{task}</span>
            <div>
              <button
                onClick={() =>
                  handleEditTask(index, prompt("Edit task:", task))
                }
                className="text-blue-500 mr-2 hover:underline focus:outline-none"
              >
                <FaRegPenToSquare />
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500 hover:underline focus:outline-none"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
