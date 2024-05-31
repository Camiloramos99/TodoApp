import React from 'react';
import { TodoCounter } from './TodoCounter';
import { AddTask } from './AddTask';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  {  Text: "Programar", completed: true },
  {  Text: "Hacer el almuerzo", completed: false },
  {  Text: "estudiar inglés", completed: false },
  {  Text: "Tender la cama", completed: false },
  {  Text: "llamar a mamá", completed: false },
];


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;

  const totalTodos = todos.length;



  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}
      />
      <AddTask/>
      <TodoList>
        { defaultTodos.map(todo => (
        <TodoItem 
        key={todo.Text} 
        Text={todo.Text} 
        completed={todo.completed} />
      ))}

      </TodoList>
    </>
  );
}



export default App;
