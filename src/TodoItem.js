import React from 'react';
import "./TodoItem.css";


function TodoItem(props) {
    return (
      <li>
        <p className= {`${props.completed && "todo-item-p--completed"}`} >{props.Text}</p>
        <div className="actions">
        <span className= {`fa fa-check-square-o icon icon-check ${props.completed && "icon-check--active"}`} 
          onClick={props.onComplete}

            


          
        ></span> 

        <span className="fa fa-trash-o icon icon-delete"
          onClick={
            () => console.log("diste click en eliminar")
          }
        ></span>
        </div>
      
      </li>
    );
  }

  export { TodoItem };