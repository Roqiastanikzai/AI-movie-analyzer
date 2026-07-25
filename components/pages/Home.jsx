import { useState } from "react";

import Navbar from "../Navbar";
import MovieForm from "../MovieForm";
import SearchBar from "../SearchBar";
import MovieList from "../MovieList";
import DiscoverMovies from "../components/DiscoverMovies";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const deleteMovie = (id) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-6">

        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent">
          AI Movie Analyzer
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">
          Track your favorite movies, write reviews, rate them, receive
          AI-powered insights, and discover new movies you'll love.
        </p>

      </section>

      <div className="max-w-7xl mx-auto px-6">

        {/* Add Movie */}
        <MovieForm onAddMovie={addMovie} />

        {/* Discover Movies */}
        <section className="mt-20">

          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
            🎬 Discover Movies
          </h2>

          <DiscoverMovies />

        </section>

        {/* Search */}
        <section className="mt-20">

          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
          />

        </section>

        {/* Movie List */}
        <section className="mt-10 mb-20">

          <h2 className="text-3xl font-bold text-yellow-400 mb-8">
            My Movie Collection
          </h2>

          <MovieList
            movies={filteredMovies}
            deleteMovie={deleteMovie}
          />

        </section>

      </div>

    </div>
  );
}

export default Home;