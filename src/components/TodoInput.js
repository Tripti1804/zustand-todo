// src/components/TodoInput.js
import React, { useState } from 'react';
import useTodoStore from '../store/useTodoStore';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const addTodo = useTodoStore(state => state.addTodo);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo({
        text: inputValue,
        completed: false,
      });
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
