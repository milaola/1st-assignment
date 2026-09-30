import React from 'react'

function MovieItem({movie}) {
  return (
    <div className="movie-item">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Genre: {movie.genre} </p>
        <p>Rating: {movie.rating} </p>
    </div>
  );
}

export default MovieItem;