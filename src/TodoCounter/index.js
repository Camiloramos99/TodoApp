import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoCounter.css";


function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

      if (completedTodos === totalTodos && totalTodos != 0 ) {
        return (
          <h1> Congratulations, <br/> TODOS completed!! </h1>  
          );
      } else {
        return ( 
          <h1 className="TodoCounter" >You have completed 
            <br/> <span> {completedTodos} </span> of <span> {totalTodos} </span> all
          </h1>    
    );
  }
}
      

export { TodoCounter };



 