import React, { useContext, /*useEffect, useState */} from 'react';
import  { TodoContext } from '../contexts/TodoContext'
import  { useForm } from 'react-hook-form';
import Styles from '../styles/TodoFormStyles.module.css'

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const { register, handleSubmit} = useForm();


  const onSubmit = (data) => {
    console.log(data)
    //If user tries to submit a task without title alert him to enter a title
    if (data.todoTitle === "") {
      alert("Your task needs a title")
    }
    //Render out task
    else {
      console.log(data)
      addTodo(data)
    }

  }

  //Updates value of title, desc and auth everytime user types something in one of the input-fields
  return (
    <div className={Styles.todo_form_wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.todo_form}>
        <input type="text" placeholder="Enter a title for your task" name="todoTitle" ref={register} maxlength="15"/>
        <input type="text" placeholder="Describe your task" name="todoDesc" ref={register} maxlength="15"/>
        <input type="text" placeholder="Who is the author?" name="todoAuth" ref={register} maxlength="10"/>
        <input type="text" placeholder="When is the deadline?" name="todoDeadline" ref={register} maxlength="12" />
        <button type="submit" className={Styles.add_todo_button}>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm;
