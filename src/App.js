import React from 'react';
import { TodoCounter } from './TodoCounter';
import { AddTask } from './AddTask';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  {  text: "Programar", completed: true },
  {  text: "Hacer el almuerzo", completed: false },
  {  text: "estudiar inglés", completed: false },
  {  text: "Tender la cama", completed: false },
  {  text: "llamar a mamá", completed: false },
];


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;

  const totalTodos = todos.length;


  const completeTodo = (text) => {   
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  



  return (
    <>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}
      />
      <AddTask/>
      <TodoList>
        { todos.map(todo => (
        <TodoItem 
        key={todo.text} 
        Text={todo.text} 
        completed={todo.completed}
        onComplete={ () => 
          completeTodo(todo.text)
        }
        onDelete={ () => 
          deleteTodo(todo.text)
        }
        />
      ))}

      </TodoList>
    </>
  );
}



export default App;
