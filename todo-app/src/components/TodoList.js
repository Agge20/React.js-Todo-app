import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoCard from './TodoCard';


const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {
        todos.map(todo => {
          return(
            <TodoCard todoTitle={todo.todoTitle} />
          )
        })
      }
    </div>
  );
}

export default TodoList;