import React, { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Eat", completed: false },
    { id: 2, text: "Code", completed: false },
    { id: 3, text: "Sleep", completed: false },
    { id: 4, text: "Repeat", completed: false },
  ]);

  const addTodo = () => {
    const text = prompt("Enter new todo:");
    if (!text) return;

    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h2 className="todo-title">Todo</h2>

        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))}

        <button className="add-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default App;
