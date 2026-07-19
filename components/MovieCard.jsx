import { useState } from "react";
import { FaEye, FaEyeSlash, FaStar, FaTrash } from "react-icons/fa";

function MovieCard({ movie, deleteMovie }) {
    const [isReviewVisible, setIsReviewVisible] = useState(false);

    return (
        <div className="bg-zinc-900/80 backdrop-blur-md border border-yellow-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/40">
            {/*Movie Poster */}
            <img
                src={movie.poster || `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'><rect width='100%' height='100%' fill='%23111111'/><text x='50%' y='50%' fill='%23facc15' font-family='Arial, Helvetica, sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>No Poster</text></svg>`}
                alt={movie.title}
                className="w-full h-80 object-cover"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='450'><rect width='100%' height='100%' fill='%23111111'/><text x='50%' y='50%' fill='%23facc15' font-family='Arial, Helvetica, sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>No Poster</text></svg>`;
                }}
            />
            {/*Movie Details */}
            <div className="p-5">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">{movie.title}</h2>
                <span className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">{movie.genre}</span>
                {/*Rating */}
                <div className="flex items-center gap-1 mb-4">{[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        className={star <= movie.rating ? "text-yellow-400" : "text-gray-500"}
                    />
                ))}</div>
                {/*Review */}
                <div className="mb-5">
                    <button
                        type="button"
                        onClick={() => setIsReviewVisible((prev) => !prev)}
                        className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-300 hover:text-red-200 transition"
                    >
                        {isReviewVisible ? <FaEyeSlash /> : <FaEye />}
                        {isReviewVisible ? "Hide Review" : "Reveal Review"}
                    </button>
                    <p className={`leading-relaxed transition-all ${isReviewVisible ? "text-gray-300" : "text-gray-400 blur-sm select-none"}`}>
                        {isReviewVisible ? movie.review : "Spoiler-safe view. Reveal to read the review."}
                    </p>
                </div>
                {/*Delete Button */}
                <button
                    onClick={() => deleteMovie(movie.id)}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                    <FaTrash /> Delete
                </button>
            </div>
        </div>
    );
}

export default MovieCard;