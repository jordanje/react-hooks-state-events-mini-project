import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ tasks, setTasks ] = useState(TASKS)
  const [ category, setCategory ] = useState("All")
  // const [filteredTasks , setFilteredTasks ] = useState([])

  function onHandleDeleteTask(text){
    const newList = tasks.filter(task => task.text !== text)
    setTasks(newList)
  }

  const filteredTasks =  tasks.filter(
    (task) => category === "All" || task.category === category
  );

  function onTaskFormSubmit(newTask, event){
    event.preventDefault();
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList)
  }
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onHandleDeleteTask={onHandleDeleteTask} />
    </div>
  );
}

export default App;
