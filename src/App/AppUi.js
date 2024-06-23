import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { AddTask } from '../AddTask';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';


function AppUi() {
  const { 
    loading,
    error,
    completeTodo,
    deleteTodo,
    todos,
    openModal,
    setOpenModal,
 } = React.useContext(TodoContext);
    return (
        <>
          <TodoCounter />
          <AddTask />

          <TodoList>
            {loading && (
              <>
                <TodosLoading />
              </>
              )}
            {error && <TodosError/>}
            {(!loading && todos.length === 0) && <EmptyTodos/>}

            {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              Text={todo.text} 
              completed={todo.completed}
              onComplete={ () => 
                completeTodo(todo.text)}
              onDelete={ () => 
                deleteTodo(todo.text)}
            />
            ))}
          </TodoList>

          {openModal && (
            <Modal>
            Funcionalidad de agregar TODO.
            </Modal>
            )}


        </>
      );
    }


export { AppUi };
