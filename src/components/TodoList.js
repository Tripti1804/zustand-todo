// src/components/TodoList.js
import React from 'react';
import useTodoStore from '../store/useTodoStore';

const TodoList = () => {
  const todos = useTodoStore(state => state.todos);
  const removeTodo = useTodoStore(state => state.removeTodo);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text}
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
