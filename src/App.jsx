import "./App.css";
import { TaskCreator } from "./components/TaksCreator.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { useState, useEffect} from "react";

function App() {
  const [taskList, setTaskList] = useState([
    { name: "Tarea 1", done: true },
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

  const toggleTask = task =>{
    setTaskList(
    taskList.map(t => (task.name === t.name) ? {...t,done:!t.done}: t));
  } 

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskList tasks={taskList}  toggleTask= {toggleTask}/>
    </div>
  );
}

export default App;
