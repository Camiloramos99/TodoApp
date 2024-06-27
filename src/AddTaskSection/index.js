import React from 'react';
import "./AddTaskSection.css"
import { TodoContext } from '../TodoContext';

function AddTaskSection() {
  const { 
    AddTask,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');     //Creamos actualizador del estado local

  const onChange = (event) => {
  setNewTodoValue(event.target.value);};
  
    return (
      <div className="add-task-section">
      <input placeholder="What is the task for today?" 
      value={newTodoValue}
      onChange={onChange}
      />
      <button className="add-task-btn"
      onClick={ () => 
        AddTask(newTodoValue)}
      
      >ADD TASK</button>
    </div>

    );
  }




export { AddTaskSection };