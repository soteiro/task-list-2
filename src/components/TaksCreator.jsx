import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setnewTaksName] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    localStorage.setItem("task", newTaskName);
    setnewTaksName("");
  };
  return (
    <form
      className="my-8 mx-auto max-w-2xl p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-3 items-center justify-center">
        <input
          className="w-full px-6 py-3 text-sm text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 bg-white shadow-sm"
          type="text"
          placeholder="Ingresa una nueva tarea"
          value={newTaskName}
          onChange={(e) => {
            setnewTaksName(e.target.value);
          }}
        />

        <button 
          className="px-6 py-3 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm"
        >
          Agregar tarea
        </button>
      </div>
    </form>
  );
};
