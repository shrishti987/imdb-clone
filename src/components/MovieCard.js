import React from "react";

const MovieCard = ({ movie }) => {
  const IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="card">
      <img src={IMG + movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;