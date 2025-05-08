import "./App.css";
import { useState } from "react";
import { TaskCreator } from "./components/TaksCreator.jsx";
import { TaskList } from "./components/TaskList.jsx";

function App() {
  return (
    <div className="App">
      <TaskCreator />
      <TaskList />
    </div>
  );
}

export default App;
