import React, { Component } from 'react';
import FilmCatalog from './film-catalog-page';
import '../../App.css';
import '../../index.css';

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
				//  or test by slowing down speed of the network to slow 3G
				this.setState({ films: films });
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
								name={films[i].name}
								country={films[i].country}
							/>
						);
					})}
				</div>
			</main>
		);
	}
}

// import React from 'react';
// import FilmCatalog from './film-catalog-page';

// const FilmCatalogGallery = ({ films }) => {
// 	return (
// 		<main className="films-container">
// 			<header className="header">
// 				<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
// 			</header>
// 			<div className="film-covers-container">
// 				{films.map((film, i) => {
// 					return (
// 						<FilmCatalog
// 							key={i}
// 							id={films[i].id}
// 							cover={films[i].cover}
// 							description={films[i].description}
// 							name={films[i].name}
// 							country={films[i].country}
// 						/>
// 					);
// 				})}
// 			</div>
// 		</main>
// 	);
// };

// export default FilmCatalogGallery;
