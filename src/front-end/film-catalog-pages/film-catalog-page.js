import React from 'react';
import { Link } from 'react-router-dom';

const FilmCatalog = ({ name, id, cover, description }) => {
	return (
		<Link to={`/${id}`} className="film-cover">
			<img
				alt={name}
				// src={require(`../../common/images/${id}.jpg`)}
			/>
			<div className="film-cover-overlay">
				<h5>{description}</h5>
			</div>
		</Link>
	);
};
export default FilmCatalog;
