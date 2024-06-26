import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { AddTaskSection } from '../AddTaskSection';
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
    // descompletarTodo,
    openModal,
    setOpenModal,
 } = React.useContext(TodoContext);
    return (
        <>
          <TodoCounter />
          <AddTaskSection/>

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
              // OnNoCompleted={() => 
              //   descompletarTodo(todo.text)}
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
