import { useState } from "react";

export const TaskList = () => {
  const [taskList, setTaskList] = useState([
    { name: "mi primer tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercer tarea", done: false },
  ]);

  return (
    <div className="taskList">
      {taskList.map((task, index) => (
        <div key={index} className="task-item">
          {task.name}
        </div>
      ))}
    </div>
  );
};
