import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {

  const [todos, setTodos] = useState([
    {
      todoTitle: "test",
      todoDesc: "test",
      todoAuth: "test",
      todoDate: "date"
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
  useEffect(() => {
    console.log("Todos")
    console.log(todos)
}, [todos]);

  const values = {
    addTodo,
    todos,
    setTodos,
    removeTodo

  }
  return (
    <TodoContext.Provider value={values}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;