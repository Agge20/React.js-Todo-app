import React, { createContext, useState, /*  useEffect */} from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    todos.push(todo)
    console.log("This is the todos: ")
    console.log(todos)
  }


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