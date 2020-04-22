import React from 'react';
import './App.css';

function App() {
  const task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const compromises = ['Soccer', 'Reading', 'Studying', 'Preparing for class'];
  return (
    <div className="App">
      {compromises.map((el) => task(el))}
    </div>
  );
}

export default App;
