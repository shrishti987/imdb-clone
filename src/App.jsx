import React, { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "./services/api";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  // Load popular movies initially
  useEffect(() => {
    fetchPopularMovies().then(setMovies);
  }, []);

  // Handle search with debouncing
  const handleSearch = (value) => {
    setQuery(value);

    // Clear previous timeout
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeout = setTimeout(async () => {
      if (value.trim() === "") {
        const data = await fetchPopularMovies();
        setMovies(data);
      } else {
        const results = await searchMovies(value);
        setMovies(results);
      }
    }, 500); // 500ms delay

    setTimeoutId(newTimeout);
  };

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Results */}
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>No Results Found</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;