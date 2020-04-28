import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      data:this.props.data
    }
  }
  render() {
    return (
      <div>
        <div className="poke-list">
          {/* this.state.data.map((el) => <Pokemon key={el.id} info={el} />) */}
          <Pokemon key={this.props.index} info={this.state.data[this.props.index]} />
        </div>
      </div>
      
    );
  } 
}

export default Pokedex;
