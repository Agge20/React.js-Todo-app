import React, { createContext } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {


  const values = {

  }
  return (
    <TodoContext.Provider value={values}>
    {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;