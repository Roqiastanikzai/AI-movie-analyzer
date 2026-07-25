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

    if (
      title.trim() === "" ||
      review.trim() === "" ||
      genre === "" ||
      rating === 0
    ) {
      alert("Please fill all fields.");
      return;
    }

    setIsFetchingPoster(true);

    const movieData = await searchMovie(title);

    const newMovie = {
      id: Date.now(),
      title: movieData?.title || title,
      review,
      genre,
      rating,
      poster: movieData?.poster || "",
      year: movieData?.year || "",
      imdbRating: movieData?.imdbRating || "",
      plot: movieData?.plot || "",
      director: movieData?.director || "",
      actors: movieData?.actors || "",
      runtime: movieData?.runtime || "",
      language: movieData?.language || "",
    };

    onAddMovie(newMovie);

    setTitle("");
    setReview("");
    setGenre("");
    setRating(0);
    setIsFetchingPoster(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-red-500/40 rounded-3xl p-8 shadow-2xl">

      <h2 className="text-4xl font-black text-center bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent mb-8">
        Add a Movie
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Movie Title */}
        <div>
          <label className="block text-yellow-400 mb-2 font-semibold">
            Movie Title
          </label>

          <input
            type="text"
            placeholder="Enter movie title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-white focus:border-yellow-400 outline-none"
          />
        </div>

        {/* Review */}
        <div>
          <label className="block text-yellow-400 mb-2 font-semibold">
            Your Review
          </label>

          <textarea
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-white resize-none focus:border-yellow-400 outline-none"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-yellow-400 mb-2 font-semibold">
            Genre
          </label>

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-white focus:border-yellow-400 outline-none"
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

        {/* Rating */}
        <div>
          <label className="block text-yellow-400 mb-2 font-semibold">
            Your Rating
          </label>

          <Rating
            rating={rating}
            setRating={setRating}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isFetchingPoster}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 font-bold text-white hover:scale-[1.02] transition duration-300"
        >
          {isFetchingPoster ? "Fetching Movie..." : "Add Movie"}
        </button>

      </form>

    </div>
  );
}

export default MovieForm;