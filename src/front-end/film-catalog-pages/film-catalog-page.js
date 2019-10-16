import React from 'react';
import { Link } from 'react-router-dom';

// deconstruct props as now they are taken from updated state
function FilmCatalog({ id, cover, description }) {
	return (
		<Link to={`/${id}`} className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={cover} />
			<div className="film-cover-overlay">
				<h5>{description}</h5>
			</div>
		</Link>
	);
}
export default FilmCatalog;
