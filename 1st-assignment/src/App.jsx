import React, { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Forrest Gump",
      genre: "Comedy-Drama",
      year: "1994",
      rating: "9/10",
    },
    {
      id: 2,
      title: "The Devil Wears Prada",
      genre: "Comedy-Drama",
      year: "2006",
      rating: "8/10",
    },
    {
      id: 3,
      title: "The Godfather",
      genre: "Crime and Gangster Film",
      year: "1972",
      rating: "10/10",
    },
    {
      id: 4,
      title: "The Odyssey",
      genre: "Mythology",
      year: "2026",
      rating: "10/10",
    },
    {
      id: 5,
      title: "Spider-Man: Brand New Day",
      genre: "Action and Adventure",
      year: "2026",
      rating: "8/10",
    },
  ]);

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="app">
      <h1>Movie List</h1>

      <MovieList
        movies={movies}
        onDelete={deleteMovie}
      />
    </div>
  );
}

export default App;
