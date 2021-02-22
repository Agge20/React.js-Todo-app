import React, { } from 'react';

const TodoForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter a title for your task"/>
        <input type="text" placeholder="Describe your task"/>
        <input type="text" placeholder="Who is the author?"/>
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm;