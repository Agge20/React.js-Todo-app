import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoCard from './TodoCard';


const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {
        todos.map((todo, i) => {
          return(
            <TodoCard todoTitle={todo.todoTitle} todoDesc={todo.todoDesc} todoAuth={todo.todoAuth} todoDeadline={todo.todoDeadline} key={i}/>
          )
        })
      }
    </div>
  );
}

export default TodoList;