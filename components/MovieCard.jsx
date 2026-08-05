import { useState } from "react";
import { FaEye, FaEyeSlash, FaStar, FaTrash } from "react-icons/fa";

function MovieCard({ movie, deleteMovie }) {
  const [isReviewVisible, setIsReviewVisible] = useState(false);

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-yellow-500 bg-zinc-900/80 shadow-lg backdrop-blur-md transition hover:shadow-yellow-500/40">
      <img
        src={movie.poster || `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'><rect width='100%' height='100%' fill='%23111111'/><text x='50%' y='50%' fill='%23facc15' font-family='Arial, Helvetica, sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>No Poster</text></svg>`}
        alt={movie.title}
        className="h-64 w-full object-cover sm:h-72 md:h-80"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'><rect width='100%' height='100%' fill='%23111111'/><text x='50%' y='50%' fill='%23facc15' font-family='Arial, Helvetica, sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>No Poster</text></svg>`;
        }}
      />

      <div className="p-4 sm:p-5">
        <h2 className="mb-2 break-words text-xl font-bold text-yellow-400 sm:text-2xl">{movie.title}</h2>
        <span className="mb-2 inline-block rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black sm:text-sm">
          {movie.genre}
        </span>

        <div className="mb-4 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={star <= movie.rating ? "text-yellow-400" : "text-gray-500"}
            />
          ))}
        </div>

        <div className="mb-5">
          <button
            type="button"
            onClick={() => setIsReviewVisible((prev) => !prev)}
            className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-300 transition hover:text-red-200"
          >
            {isReviewVisible ? <FaEyeSlash /> : <FaEye />}
            {isReviewVisible ? "Hide Review" : "Reveal Review"}
          </button>
          <p className={`leading-relaxed transition-all ${isReviewVisible ? "text-gray-300" : "select-none text-gray-400 blur-sm"}`}>
            {isReviewVisible ? movie.review : "Spoiler-safe view. Reveal to read the review."}
          </p>
        </div>

        <button
          onClick={() => deleteMovie(movie.id)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 font-semibold transition-all duration-300 hover:bg-red-700 sm:w-auto"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default MovieCard;