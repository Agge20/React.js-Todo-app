import React, { useContext, /*useEffect, useState */} from 'react';
import  { TodoContext } from '../contexts/TodoContext'
import  { useForm } from 'react-hook-form';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const { register, handleSubmit} = useForm();


  const onSubmit = (data) => {
    console.log(data)
    addTodo(data)
  }

  //Updates value of title, desc and auth everytime user types something in one of the input-fields
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter a title for your task" name="todoTitle" ref={register}/>
        <input type="text" placeholder="Describe your task" name="todoDesc" ref={register}/>
        <input type="text" placeholder="Who is the author?" name="todoAuth" ref={register} />
        <input type="text" placeholder="When is the deadline?" name="todoDeadline" ref={register} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm;
