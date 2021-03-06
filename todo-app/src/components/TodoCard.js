import React, { useContext, useState} from 'react';
import Styles from '../styles/TodoCardStyles.module.css';
import { TodoContext } from '../contexts/TodoContext'

const TodoCard = (props) => {
  const { removeTodo  } = useContext(TodoContext);
  const [done, setDone] = useState(false);

  const markAsDone = () => {
    if (done === true) {
      setDone(false);

    }
    else {
      setDone(true)
    }
  }

  return (
    <div className={`${Styles.todo_card} ${done ? "not_done" : "mark_as_done"}`}>
      <div className={Styles.left_inner_wrapper}>
        <h2>{props.todoTitle}</h2>
        <h5>{props.todoDeadline}</h5>
      </div>
      <div className={Styles.right_inner_wrapper}>
        <p>{props.todoDesc}</p>
        <h4>{props.todoAuth}</h4>
      </div>
      <button className={Styles.todo_card_button} onClick={() => {removeTodo(props.todoTitle)}}>X</button>
      <button className={Styles.todo_card_button} onClick={markAsDone}>Done</button>
    </div>
  );
}

export default TodoCard;