import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';
import { initialToDoList, toDoReducer } from './reducers'

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialToDoList);
  const [taskInput, setTaskInput] = useState('')

  const toggleCompleted = item => {
    dispatch({ type: "TOGGLE_COMPLETED", payload:item })
  }

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  const handleChanges = event => {
    event.preventDefault();
    setTaskInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: taskInput })
  }

  return (
    <div>
      <h1>My Reducer App</h1>
      <TodoForm
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
      />
      <TodoList
        state={state}
        toggleCompleted={toggleCompleted}
        clearCompleted={clearCompleted}
      />
      <button onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;