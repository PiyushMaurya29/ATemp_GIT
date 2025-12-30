import React from "react";

const TodoCard = ({ todo, toggleTodo }) => {
  return (
    <div className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      </div>
      <span className="menu">⋯</span>
    </div>
  );
};

export default TodoCard;
