import { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setnewTaksName] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    localStorage.setItem("task", newTaskName);
    setnewTaksName("");
  };
  return (
    <form
      className="flex gap-2 items-center justify-center mt-10"
      onSubmit={handleSubmit}
    >
      <input
        
        className="bg-white border-2 border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="enter a new task"
        value={newTaskName}
        onChange={(e) => {
          setnewTaksName(e.target.value);
        }}
      />

      <button  className="bg-blue-500 rounded-full p-2 text-gray-300 hover:text-white hover: ">save task</button>
    </form>
  );
};
