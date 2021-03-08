import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {

  const [todos, setTodos] = useState([
    {
      todoTitle: "Eat food",
      todoDesc: "Gonna make some meatballs",
      todoAuth: "August",
      todoDeadline: "January 13"
    }
  ]);
  const addTodo = (data) => {
    setTodos(prevState => [data, ...prevState])
    console.log(todos)
  }

  const removeTodo = (todoToRemove) => {
    console.log("This is todoToRemove " + todoToRemove);
    const removeClickedTodo = todos.filter(todo => todo.todoTitle !== todoToRemove);
    setTodos(removeClickedTodo)
    console.log(removeClickedTodo);

  }

  const values = {
    addTodo,
    todos,
    setTodos,
    removeTodo,

  }
  return (
    <TodoContext.Provider value={values}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;