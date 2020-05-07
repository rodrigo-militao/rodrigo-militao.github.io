import React from 'react';

class FavoriteDogs extends React.Component {
	render() {
		return (
			<div> 
				<h1>List of Favorite Dogs</h1>
				<ul>
					{this.props.data.map(el => <li key={el}><img src={el} height="100" alt="favorite dog" /></li>)}
				</ul>
			</div>
		);
	}
}

export default FavoriteDogs;