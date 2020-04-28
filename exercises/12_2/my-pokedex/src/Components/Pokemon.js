import React from 'react';

class Pokemon extends React.Component {

  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.info;
    return (
      <div className="poke-card">
        <div className="poke-card-body">
          <img src={image} alt={name} className="poke-card-image" />
          <h3 className="poke-card-title">{name}</h3>
          <p className="poke-card-subtitle">Type: {type}</p>
          <p className="poke-card-subtitle">Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
          <p className="poke-card-storyline">More info: <a rel="noopener noreferrer" href={moreInfo} target='_blank'>Click here</a></p>
        </div>
      </div>
    );
  } 
}

export default Pokemon;