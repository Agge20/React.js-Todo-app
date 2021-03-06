import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {

  const [todos, setTodos] = useState([

  ]);
  const addTodo = (data) => {
    setTodos(prevState => [data, ...prevState])
    console.log(todos)
  }

  useEffect(() => {
    console.log("Todos")
    console.log(todos)
}, [todos]);

  const values = {
    addTodo,
    todos,
    setTodos
  }
  return (
    <TodoContext.Provider value={values}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;