import { useState } from "react";

export const TaskCreator = () => {
  const [newTaskName, setnewTaksName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("task", newTaskName);
    setnewTaksName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter a new task"
        value={newTaskName}
        onChange={(e) => {
          setnewTaksName(e.target.value);
        }}
      />

      <button>save task</button>
    </form>
  );
};
