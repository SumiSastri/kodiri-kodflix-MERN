import React, { Component } from 'react';
import FilmCatalog from './film-catalog-page';
import '../../App.css';
import '../../index.css';

export default class FilmCatalogGallery extends Component {
	constructor() {
		super();
		this.state = {
			filmsBackend: []
		};
	}
	componentDidMount() {
		fetch('/api/films-data')
			.then((res) => res.json())
			.then((filmsBackend) => {
				this.setState({ filmsBackend });
			})
			.catch((error) => console.log(error));
	}
	render() {
		let films = this.state.filmsBackend;
		return (
			<main className="films-container">
				<header className="header">
					<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
				</header>
				<div className="film-covers-container">
					{films.map((films) => (
						<FilmCatalog
							id={films.id}
							key={films.id}
							cover={films.cover}
							description={films.description}
							name={films.name}
							country={films.country}
						/>
					))}
				</div>
			</main>
		);
	}
}
