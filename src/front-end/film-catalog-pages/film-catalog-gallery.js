import React, { Component } from 'react';
import FilmCatalog from './film-catalog-page';

export default class FilmCatalogGallery extends Component {
	constructor() {
		super();
		this.state = {
			films: []
		};
	}
	componentDidMount() {
		fetch('/api/films-data')
			.then((res) => res.json())
			.then((films) => {
				// .then((films) => this.setState({}));
				// do not remove checks the loading message works
				//  or test by slowing down speed of the network to slow 3G
				this.setState({ films: films });
				// console.log(this.state);
			})
			.catch((error) => console.log(error));
	}
	render() {
		let films = this.state.films;
		return !films.length ? (
			<div>
				<h2>Please wait this page is still loading</h2>
			</div>
		) : (
			<main className="films-container">
				<header className="header">
					<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
				</header>
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
