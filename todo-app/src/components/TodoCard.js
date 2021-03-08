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
    <div className={`${Styles.todo_card} ${done ? "mark_as_done" : ""}`}>
      <div className={Styles.left_inner_wrapper}>
        <h2>{props.todoTitle}</h2>
        <h5>{props.todoDeadline}</h5>
      </div>
      <div className={Styles.right_inner_wrapper}>
        <p className={Styles.todo_description}>{props.todoDesc}</p>
        <h4>{props.todoAuth}</h4>
      </div>
      <button className={Styles.todo_card_button} onClick={() => {removeTodo(props.todoTitle)}}>
        <span style={{color: "#DB5461"}}>
          <i className="fas fa-times-circle fa-3x"></i>
        </span>
      </button>
      <button className={Styles.todo_card_button} onClick={markAsDone}>
        <span style={{color: "#ACEB98"}}>
          <i class="fas fa-check-circle fa-3x"></i>
        </span>
      </button>
    </div>
  );
}

export default TodoCard;