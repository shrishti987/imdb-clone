import React from "react";

// Sample static data
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/51s+6+u3bXL._AC_.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/71n58K0yW-L._AC_SL1178_.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/51EbJjlLgRL._AC_.jpg",
  },
];

// Reusable MovieCard component
const MovieCard = ({ title, year, rating, poster }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 w-64">
      <img src={poster} alt={title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">{year}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-yellow-500 font-bold">⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};

// Main App component to display list
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
