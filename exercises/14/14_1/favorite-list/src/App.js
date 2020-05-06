import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const content = [
    {id: 1, item: 'Ler um livro'},
    {id: 2, item: 'Comer'},
    {id: 3, item: 'Fazer algo'},
    {id: 4, item: 'Fazer nada'},
  ];

  return (
    <div className="App">
      <Dropdown content={content}>Título da lista customizado</Dropdown>
    </div>
  );
}

export default App;