import React, { useContext } from 'react';
import Styles from '../styles/TodoCardStyles.module.css';
import { TodoContext } from '../contexts/TodoContext'

const TodoCard = (props) => {
  const { removeTodo } = useContext(TodoContext)

  return (
    <div className={Styles.todo_card}>
      <div className={Styles.left_inner_wrapper}>
        <h2>{props.todoTitle}</h2>
        <h5>{props.todoDeadline}</h5>
      </div>
      <div className={Styles.right_inner_wrapper}>
        <p>{props.todoDesc}</p>
        <h4>{props.todoAuth}</h4>
      </div>
      <button className={Styles.remove_todo} onClick={() => {removeTodo(props.todoTitle)}}>X</button>
    </div>
  );
}

export default TodoCard;