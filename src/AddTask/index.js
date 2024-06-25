import React from 'react';
import "./AddTask.css"

function AddTask({onclickAddTask}) {
    return (
      <div className="add-task-section">
      <input placeholder="What is the task for today?" />
      <button className="add-task-btn"
      onClick={onclickAddTask}
      
      >ADD TASK</button>
    </div>

    );
  }




export { AddTask };