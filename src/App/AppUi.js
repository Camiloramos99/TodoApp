import { TodoCounter } from '../TodoCounter';
import { AddTask } from '../AddTask';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

function AppUi({ 
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


export { AppUi };
