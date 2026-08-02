import { useState } from "react";
import { FaMagic } from "react-icons/fa";
import { searchMovies } from "./pages/services/movieAPI";
import { recommendMoviesByGenre } from "./recommendMovies";
import MovieModal from "./MovieModal";

function DiscoverMovies() {
  const [genre, setGenre] = useState("Action");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const discoverMovies = async () => {
    setLoading(true);

    try {
      const movieTitles = await recommendMoviesByGenre(genre);
      const movieData = await searchMovies(movieTitles);
      setMovies(movieData);
    } catch (err) {
      console.error(err);
      alert("Failed to discover movies.");
    }

    setLoading(false);
  };

  return (
    <section className="my-8 sm:my-12 lg:my-16">
      <h2 className="mb-8 bg-gradient-to-r from-red-500 via-purple-500 to-yellow-400 bg-clip-text text-center text-3xl font-black text-transparent sm:text-4xl lg:text-5xl">
        Discover Movies with AI
      </h2>

      <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full rounded-xl border border-yellow-500 bg-zinc-900 px-4 py-3 text-white sm:max-w-[220px]"
        >
          <option>Action</option>
          <option>Adventure</option>
          <option>Animation</option>
          <option>Comedy</option>
          <option>Crime</option>
          <option>Drama</option>
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Mystery</option>
          <option>Romance</option>
          <option>Sci-fi</option>
          <option>Thriller</option>
        </select>

        <button
          onClick={discoverMovies}
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 px-5 py-3 font-bold transition hover:scale-[1.01]"
        >
          <FaMagic />
          Discover Movies
        </button>
      </div>

      {loading && <h3 className="text-center text-xl text-yellow-400">AI is discovering movies...</h3>}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {movies.map((movie) => (
          <div
            key={movie.title}
            className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 transition hover:border-yellow-400"
          >
            <img src={movie.poster} alt={movie.title} className="h-80 w-full object-cover sm:h-72 lg:h-80" />

            <div className="p-4">
              <h3 className="mb-2 text-lg font-bold sm:text-xl">{movie.title}</h3>
              <p className="mb-4 text-gray-400">⭐ {movie.imdbRating}</p>

              <button
                onClick={() => setSelectedMovie(movie)}
                className="w-full rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 py-3 font-bold"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </section>
  );
}

export default DiscoverMovies;