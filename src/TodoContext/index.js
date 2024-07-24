import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { createContext } from 'react';


const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);   
      
      const [openModal, setOpenModal] = React.useState(false);     //Creamos actualizador del modal

      const completedTodos = todos.filter(todo => todo.completed).length;
    
      const totalTodos = todos.length;

      const AddTask = (text) => {   
        const newTodos = [...todos];
          if(text !== "" && !newTodos.some(task => task.text === text)) {
            if (newTodos.length < 7) { // Verifica si hay menos de 8 elementos
              newTodos.push({
                text,
                completed: false,
              });
              saveTodos(newTodos);
            } else {
              setOpenModal(true);
            }
          }
        };
    
      const completeTodo = (text) => {   
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text);
        if(newTodos[todoIndex].completed === false) {
          newTodos[todoIndex].completed = true
        }else {
            newTodos[todoIndex].completed = false}
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
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            completeTodo,
            deleteTodo,
            todos,
            openModal,
            setOpenModal,
            AddTask,
        }}>
          {children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider };