import React from 'react';
import "./TodoCounter.css";


function TodoCounter({ total, completed }) {
      if (completed === total) {
        return (
          <h1> ¡Felicitaciones, <br/> todos completados! </h1>  
          );
      } else {
        return ( 
          <h1 className="TodoCounter" >You have completed 
            <br/> <span> {completed} </span> of <span> {total} </span> all
          </h1>    
    );
  }
}
      

export { TodoCounter };