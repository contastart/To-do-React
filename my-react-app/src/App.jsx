import React from 'react';
import './App.css'
import { TodoProvider } from './Components/To-do/TodoContext';
import { AppUI } from './Components/AppUI';

function App() {
  

  return (
    <div className="App">
      <TodoProvider>
        <AppUI />
      </TodoProvider>
      
    </div>
  )
}

export default App
