import "./App.css";
import { TaskCreator } from "./components/TaksCreator.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { useState, useEffect} from "react";

function App() {
  const [taskList, setTaskList] = useState([
  ]);

  useEffect(() => {
    console.log("first render");
    let data = localStorage.getItem("task")
    if (data){
      setTaskList(JSON.parse(data));
    }
  }, [ ])

  function createNewTask(taskName) {
    // chekear el nombre de la tarea para ver si existe
    if(taskName.trim() === ""){
      alert("la tarea no puede estar vacia");
      return;
    }
    if(!taskList.find(task => task.name === taskName)){
      setTaskList([...taskList, { name: taskName, done: false }]);
    }
    else{
      alert("la tarea ya existe");
    }
  }

  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(taskList));
    sessionStorage.setItem("task", JSON.stringify(taskList));
  }, [ taskList ])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskList tasks={taskList} />
    </div>
  );
}

export default App;
