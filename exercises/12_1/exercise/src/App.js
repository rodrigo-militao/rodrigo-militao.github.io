import React from 'react';
import './App.css';

function App() {
  const compromises = ['Soccer', 'Reading', 'Studying', 'Preparing for class'];
  const task = (value) => {
    return <li> {value} </li>
  }

  return (
    <div className="App">
      <h2>Lista de Tarefas</h2>
         
      <ul>
        {compromises.map((el) => task(el))}
      </ul>
    </div>
  );
}

export default App;
