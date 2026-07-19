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
        const posterInfo = await searchMovie(title);
        const newMovie = {
            id: Date.now(),
            title: posterInfo?.title || title,
            review,
            genre,
            rating,
            poster: posterInfo?.poster || "",
        };
        onAddMovie(newMovie);
        setTitle("");
        setReview("");
        setGenre("");
        setRating(0);
        setIsFetchingPoster(false);
    };

    return (
        <div className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-md border border-red-400/70 rounded-2xl shadow-xl shadow-red-500/20 p-8 mt-8">
            <h2 className="text-3xl font-bold text-red-300 text-center mb-6">Add a Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-yellow-300 mb-2">Movie Title</label>
                    <input
                        type="text"
                        placeholder="Enter movie Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-yellow-400 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-yellow-300 mb-2">Your Review</label>
                    <textarea
                        rows="5"
                        placeholder="Write your review..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-yellow-400 outline-none resize-none"
                    />
                </div>

                <div>
                    <label className="block text-yellow-300 mb-2">Genre</label>
                    <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-yellow-400 outline-none"
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
                    <label className="block text-yellow-300 mb-2">Rating</label>
                    <Rating rating={rating} setRating={setRating} />
                </div>

                <button
                    type="submit"
                    disabled={isFetchingPoster}
                    className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-black font-bold py-3 rounded-lg hover:from-red-400 hover:to-yellow-400 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 disabled:opacity-70"
                >
                    {isFetchingPoster ? "Fetching poster..." : "Add Movie"}
                </button>
            </form>
        </div>
    );
}

export default MovieForm;