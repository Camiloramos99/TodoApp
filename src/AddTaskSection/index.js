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

  const handleonKeyDown = (event) => {
  if (event.key === 'Enter') {
    AddTask(newTodoValue);
    setNewTodoValue('');
  }
  }
  
    return (
      <div className="add-task-section">
      <input type='text' onKeyDown={handleonKeyDown} placeholder="What is the task for today?" 
      value={newTodoValue}
      onChange={onChange}
      />
      <button className="add-task-btn"

      onClick={ () => {
        AddTask(newTodoValue);
        setNewTodoValue('');
      } }
      
      >ADD TASK</button>
    </div>

    );
  }




export { AddTaskSection };