import React from 'react';
import { TodoCounter } from './TodoCounter';
import { AddTask } from './AddTask';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

// const defaultTodos = [
//   {  text: "Programar", completed: true },
//   {  text: "Hacer el almuerzo", completed: false },
//   {  text: "estudiar inglés", completed: false },
//   {  text: "Tender la cama", completed: false },
//   {  text: "llamar a mamá", completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

//   localStorage.setItem('TODOS_V1', defaultTodos);
// Custom Hook para guardar todos (items) de usuario

function useLocalStorage(itemName, initialValue)  {
  const localStorageItem = localStorage.getItem('itemName') // Trae cada item de localStorage y lo guarda en la variable

  let parsedItem;

  if (!localStorageItem) {                                        //Logica(si no hay item en LS => )
    localStorage.setItem(itemName, JSON.stringify(initialValue)); //setItem con initialValue (stringified) para localstorage
    parsedItem = initialValue;                        //Declara(parsedItem) con initial value parseado
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);    //Estado inicial para uso interno del Custom Hook


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem)); //Pasamos a local storage el nuevo item
    setItem(newItem);
  };

  return [item, saveItem];
}

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
