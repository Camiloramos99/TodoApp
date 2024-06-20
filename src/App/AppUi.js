import { TodoCounter } from '../TodoCounter';
import { AddTask } from '../AddTask';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

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
