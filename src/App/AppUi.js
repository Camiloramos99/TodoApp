import { TodoCounter } from '../TodoCounter';
import { AddTask } from '../AddTask';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

function AppUi({ 
    loading,
    error,
    completedTodos,
    totalTodos,
    completeTodo,
    deleteTodo,
    todos
 }) {
    return (
        <>
          <TodoCounter 
          completed={completedTodos} 
          total={totalTodos}
          />
          <AddTask/>
          <TodoList>

            {loading && <p>Estamos cargando...</p>}
            {error && <p>Hubo un error!!</p>}
            {(!loading && todos.length === 0) && <p>Crea tu primer TODO!!</p>}

            {todos.map(todo => (
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


export { AppUi };
