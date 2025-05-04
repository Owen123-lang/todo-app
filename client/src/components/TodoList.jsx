import React from 'react';

function TodoList({ todos, onDeleteTodo }) {
  if (!todos.length) {
    return <p className="empty-list">No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className="todo-item">
          <span className="todo-text">{todo.text}</span>
          <button
            onClick={() => onDeleteTodo(todo._id)}
            className="delete-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;