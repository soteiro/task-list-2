import "./App.css";
import { TaskCreator } from "./components/TaksCreator.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { useState, useEffect} from "react";
import { VisibilityControl } from "./components/VisibilityControl.jsx";

function App() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log("first render");
    let data = localStorage.getItem("task")
    if (data){
      setTaskList(JSON.parse(data));
    }
  }, [])

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

  const cleanTaskCompleted  = () => {
    setTaskList(taskList.filter(task => !task.done));
  }

  return (
    <div className="App container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Lista de tareas</h1>
      <TaskCreator createNewTask={createNewTask} />

      {/* Lista de tareas pendientes */}
      <TaskList 
        tasks={taskList}  
        toggleTask={toggleTask} 
        showCompleted={false} 
        tableName="Tareas Pendientes"
      />

      {/* Control para mostrar tareas completadas */}
      <VisibilityControl 
        setShowCompleted={(checked) => setShowCompleted(checked)}
         cleanTaskCompleted={cleanTaskCompleted}
      />
     

      {/* Lista de tareas completadas (solo se muestra si showCompleted es true) */}
      {showCompleted && (
        <TaskList 
          tasks={taskList}  
          toggleTask={toggleTask} 
          showCompleted={true} 
          tableName="Tareas Completadas"
        />
      )}
    </div>
  );
}

export default App;
