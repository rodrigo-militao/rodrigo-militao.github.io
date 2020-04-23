import React from 'react';
import './App.css';

import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>My Pokedex</h1>
      <Pokedex data={data} />
    </div>
  );
}

export default App;
