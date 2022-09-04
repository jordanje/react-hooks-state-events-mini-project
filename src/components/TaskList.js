import React from "react";
import Task from "./Task";

function TaskList({tasks, onHandleDeleteTask}) {

  return (
    <div className="tasks">
     {tasks.map((task, index) => (
    <Task key={index} 
    category={task.category} 
    text={task.text}
     onHandleDeleteTask={onHandleDeleteTask}/>
     )
     )}
    </div>
  );
}

export default TaskList;
