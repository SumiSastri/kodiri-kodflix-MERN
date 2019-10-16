import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../App';
import '../../index';

export default class ScandiFilmDetails extends Component {
	constructor() {
		super();
		this.state = {
			films: {}
		};
	}
	componentDidMount() {
		fetch('/api/films-data')
			.then((res) => res.json())
			.then((films) => {
				// console.log(films)
				// let routeFilmId = this.props.match.params.routeFilmId;
				// films in the find method is the getFilmsData() which is now a param
				// let what = films.find(film => films.id === routeFilmId);
				this.setState({ films: films });
			})
			.catch((error) => console.log(error));
	}
	render() {
		let films = this.state.films;
		if (films === undefined) {
			return <Redirect to="/pageNotFound" />;
		} else {
			return (
				<div className="film-details-container">
					<h1 className="details-header">{films.name}</h1>
					<div className="details-info">
						<div className="details-cover-container">
							<img alt={films.name} className="details-image" src={films.cover} />
							<div className="details-image-overlay">
								<h2>{films.country}</h2>
							</div>
						</div>
						<div className="details-description-review">
							<h2>{films.description}</h2>
							<p>{films.review}</p>
						</div>
					</div>
					<Link to="/">
						<h4>Back to home page</h4>
					</Link>
				</div>
			);
		}
	}
}
