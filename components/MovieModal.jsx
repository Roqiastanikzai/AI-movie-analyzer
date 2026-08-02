import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaStar, FaClock, FaUserTie, FaUsers } from "react-icons/fa";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, y: 80 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 80 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-yellow-500 bg-zinc-900 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full bg-red-500 p-3 transition hover:bg-red-600 sm:right-5 sm:top-5"
          >
            <FaTimes />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <img src={movie.poster} alt={movie.title} className="h-72 w-full object-cover sm:h-full" />

            <div className="p-4 sm:p-6 lg:p-8">
              <h2 className="mb-3 text-2xl font-black text-yellow-400 sm:text-3xl lg:text-4xl">
                {movie.title}
              </h2>

              <div className="mb-5 flex items-center gap-3">
                <FaStar className="text-yellow-400" />
                <span>{movie.imdbRating}</span>
              </div>

              <div className="space-y-3 text-sm text-gray-300 sm:text-base">
                <p>
                  <strong>Genre:</strong> {movie.genre}
                </p>

                <p>
                  <FaClock className="mr-2 inline" />
                  {movie.runtime}
                </p>

                <p>
                  <FaUserTie className="mr-2 inline" />
                  {movie.director}
                </p>

                <p>
                  <FaUsers className="mr-2 inline" />
                  {movie.actors}
                </p>

                <p>
                  <strong>Language:</strong> {movie.language}
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="mb-2 font-bold text-yellow-400">Story</h3>
                <p className="text-sm leading-relaxed text-gray-400 sm:text-base">{movie.plot}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <button
                  onClick={onClose}
                  className="flex-1 rounded-xl border-2 border-yellow-400 bg-zinc-800 px-4 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  ← Go Back
                </button>

                <button className="flex-1 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 px-4 py-3 font-bold transition hover:scale-[1.01]">
                  ❤️ Add To My Movies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MovieModal;