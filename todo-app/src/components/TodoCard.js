import React from 'react';

const TodoCard = (props) => {
  return (
    <div>
      <h2>{props.todoTitle}</h2>
      <p>{props.todoDesc}</p>
      <h4>{props.todoAuth}</h4>
      <h5>{props.todoDeadline}</h5>
    </div>
  );
}

export default TodoCard;