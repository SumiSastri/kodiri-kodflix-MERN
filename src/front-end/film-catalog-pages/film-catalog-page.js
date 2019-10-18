import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../index.css';

function FilmCatalog({ id, cover, description }) {
	return (
		<Link to={`/${id}`} className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={require(`../assets/${cover}.jpeg`)} />
			<div className="film-cover-overlay">
				<h5>{description}</h5>
			</div>
		</Link>
	);
}
export default FilmCatalog;
