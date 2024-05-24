import "./TodoItem.css";


function TodoItem(props) {
    return (
      <li>
        <p>{props.Text}</p>
        <div className="actions">
        <span className="check-todo fa fa-check-square-o" ></span> 
        <span className="delete-todo fa fa-trash-o"></span>
        </div>
      
      </li>
    );
  }

  export { TodoItem };