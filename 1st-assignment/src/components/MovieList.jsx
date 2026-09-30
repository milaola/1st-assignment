import React from 'react'
import MovieItem from './components/MovieItem'

function MovieList({ movies }) {
    return (
        <div classname="movie-list">
            {movies.map((movie) => (
                <MovieItem key= {movie.id} movie={movie}/>
        ))}
        </div>
    );
}

export default MovieList;