import React from 'react';
import { AppUi } from './AppUi';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {  text: "Programar", completed: true },
//   {  text: "Hacer el almuerzo", completed: false },
//   {  text: "estudiar inglés", completed: false },
//   {  text: "Tender la cama", completed: false },
//   {  text: "llamar a mamá", completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// Custom Hook para guardar todos (items) de usuario



function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);       

  const completedTodos = todos.filter(todo => todo.completed).length;

  const totalTodos = todos.length;


  const completeTodo = (text) => {   
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUi
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    todos={todos} 
    />
  );
}


  



export default App;
