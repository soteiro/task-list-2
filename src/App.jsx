import "./App.css";
import { TaskCreator } from "./components/TaksCreator.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([
    { name: "mi primer tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercer tarea", done: false },
  ]);

  function createNewTask(taskName) {
    // chekear el nombre de la tarea para ver si existe

    if(!taskList.find(task => task.name === taskName)){
      setTaskList([...taskList, { name: taskName, done: false }]);
    }
    else{
      alert("la tarea ya existe");
    }
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskList tasks={taskList} />
    </div>
  );
}

export default App;
