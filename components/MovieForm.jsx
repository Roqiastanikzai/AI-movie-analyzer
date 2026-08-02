import { useState } from "react";
import Rating from "./Rating";
import { searchMovie } from "./pages/services/movieAPI";

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [isFetchingPoster, setIsFetchingPoster] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || review.trim() === "" || genre === "" || rating === 0) {
      alert("Please fill all fields.");
      return;
    }

    setIsFetchingPoster(true);

    const movieData = (await searchMovie(title)) || {
      title,
      year: "2024",
      poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      imdbRating: "8.5",
      genre,
      plot: "Movie details unavailable. This is a placeholder poster.",
      director: "Unknown",
      actors: "Unknown",
      runtime: "N/A",
      language: "English",
    };

    const newMovie = {
      id: Date.now(),
      title: movieData.title || title,
      review,
      genre,
      rating,
      poster: movieData.poster || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
      year: movieData.year || "",
      imdbRating: movieData.imdbRating || "",
      plot: movieData.plot || "",
      director: movieData.director || "",
      actors: movieData.actors || "",
      runtime: movieData.runtime || "",
      language: movieData.language || "",
    };

    onAddMovie(newMovie);

    setTitle("");
    setReview("");
    setGenre("");
    setRating(0);
    setIsFetchingPoster(false);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-red-500/40 bg-zinc-900/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8">
      <h2 className="mb-6 bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 bg-clip-text text-center text-3xl font-black text-transparent sm:text-4xl">
        Add a Movie
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label className="mb-2 block font-semibold text-yellow-400">Movie Title</label>
          <input
            type="text"
            placeholder="Enter movie title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-black p-3 text-white outline-none transition focus:border-yellow-400 sm:p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-yellow-400">Your Review</label>
          <textarea
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            className="w-full resize-none rounded-xl border border-zinc-700 bg-black p-3 text-white outline-none transition focus:border-yellow-400 sm:p-4"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-yellow-400">Genre</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-black p-3 text-white outline-none transition focus:border-yellow-400 sm:p-4"
          >
            <option value="">Select Genre</option>
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
        </div>

        <div>
          <label className="mb-2 block font-semibold text-yellow-400">Your Rating</label>
          <Rating rating={rating} setRating={setRating} />
        </div>

        <button
          type="submit"
          disabled={isFetchingPoster}
          className="w-full rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 py-3 font-bold text-white transition duration-300 hover:scale-[1.01] sm:py-4"
        >
          {isFetchingPoster ? "Fetching Movie..." : "Add Movie"}
        </button>
      </form>
    </div>
  );
}

export default MovieForm;