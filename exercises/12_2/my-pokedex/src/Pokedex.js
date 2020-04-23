import React from 'react';

import Pokemon from './Pokemon';


class Pokedex extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div>
        {data.map((el) => <Pokemon key={el.id} info={el} />)}
      </div>
    );
  } 
}

export default Pokedex;
