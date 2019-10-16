import React, { Component } from 'react';
import FilmCatalog from './film-catalog-page';

export default class FilmCatalogGallery extends Component {
	constructor() {
		super();
		this.state = {
			films: []
		};
	}
	// fetch films from the backend, turn the response into a json file, then set state to the films array
	componentDidMount() {
		fetch('/api/films-data').then((res) => res.json()).then((films) => {
			// console.log(films);
			this.setState({ films: films });
		});
		// console.log(this.state);
	}
	render() {
		// deconstruct state
		let films = this.state.films;
		// console.log(this.state);
		return (
			<main className="films-container">
				<header className="header">
					<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
				</header>
				{/* now change state map with index param */}
				<div className="film-covers-container">
					{films.map((film, i) => {
						return (
							<FilmCatalog
								key={i}
								id={films[i].id}
								cover={films[i].cover}
								description={films[i].description}
							/>
						);
					})}
				</div>
			</main>
		);
	}
}
