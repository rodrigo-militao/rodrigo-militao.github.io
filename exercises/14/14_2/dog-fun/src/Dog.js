import React from 'react';
import { Grid, Button } from '@material-ui/core';
import FavoriteDogs from './FavoriteDogs';

class Dog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      isLoaded: false,
      dog: null,
      favList: [],
    };
    this.handleNewImage = this.handleNewImage.bind(this);
		this.setAsFavorite = this.setAsFavorite.bind(this);
	}

	componentDidMount() {
		this.handleNewImage()
	}

	handleNewImage() {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						dog: result.message
					})
				}
			)
	}
	setAsFavorite() {
		const { favList, dog } = this.state;
		this.setState({ favList: [...favList, dog] });
	}

	render() {
		const { isLoaded, dog, favList } = this.state;
		if(!isLoaded) return <div>Loading...</div>;
		return (
			<Grid container>
				<Grid item xs={4}>
					<FavoriteDogs data={favList} />
				</Grid>
				<Grid item xs={8}>
					<h1>Random images from pretty dogs</h1>
					<img src={dog} height="400" alt="A pretty dog" /> <br/>
					<Button color="primary" onClick={this.handleNewImage}>Next Image</Button>
					<Button color="secondary" onClick={this.setAsFavorite}>Set this Dog as favorite</Button>
				</Grid>
			</Grid>
		);
	}
}

export default Dog;
