import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex';
import Button from './Components/Button';
import data from './data';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      index: 0,
      data,
      types: [],
    }
  }

  componentDidMount() {
    const types = [];
    this.state.data.map((el) => types.push(el.type) );
    const unique = [...new Set(types)];
    this.setState({
      types: unique
    });
  }

  filter = (e) => {
    const targetValue = e.target.value;
    if(targetValue === 'all') return this.setState({ data });
    const filtered = this.state.data.filter((el) => el.type === targetValue);
    this.setState({
      data: filtered,
    });
  }

  updateIndexState = (i) => {
    this.setState({
      index: this.state.index + i
    });
  }

  render() {
		return (
      <div className="App">
   	    <div className="poke-card-header">
   	  	  <h1 className="page-title">My Pokedex</h1>
   	    </div>
         <div className="select-filter">
          <select onChange={this.filter}>
            <option value="" key="none"></option>
            <option value="all" key="all">All</option>
            {this.state.types.map((el) => <option value={el} key={el}>{el}</option>)}
          </select>
         </div>

         <Pokedex data={this.state.data} index={this.state.index} />

         <div className="buttons">
          <Button
              className="previous-pokemon"
              handleClick={() => this.updateIndexState(-1)}
              label="Previous Pokémon"
              disabled={this.state.data.length <= 1 ? true : false}
            />
          <Button
              className="next-pokemon"
              handleClick={() => this.updateIndexState(1)}
              label="Next Pokémon"
              disabled={this.state.data.length <= 1 ? true : false}
            />
         </div>
      </div>
    );
  }
  
}

export default App;
