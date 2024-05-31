import React from 'react';
import "./TodoCounter.css";

function TodoCounter(props) {
    return (
      <h1 className="TodoCounter" >You have completed 
      <br/> <span> {props.completed} </span> of <span> {props.total} </span> all</h1>
    );
  }




export { TodoCounter };