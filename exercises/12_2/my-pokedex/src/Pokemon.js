import React from 'react';

class Pokemon extends React.Component {

  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.info;
    return (
      <div className="poke">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        <p>More info: <a href={moreInfo} target='_blank'>Click here</a></p>
      </div>
    );
  } 
}

export default Pokemon;