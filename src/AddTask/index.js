import React from 'react';
import "./AddTask.css"

function AddTask() {
    return (
      <div className="add-task-section">
      <input placeholder="What is the task for today?" />
      <button className="add-task-btn"
      onClick={ 
        () => console.log("diste click en agregar tarea")
      }
      
      >ADD TASK</button>
    </div>

    );
  }




export { AddTask };