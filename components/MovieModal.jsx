import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaStar, FaClock, FaUserTie, FaUsers } from "react-icons/fa";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, y: 80 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 80 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 p-3 rounded-full z-20"
          >
            <FaTimes />
          </button>

          <div className="grid md:grid-cols-2">

            {/* Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            {/* Details */}
            <div className="p-8">

              <h2 className="text-4xl font-black text-yellow-400 mb-3">
                {movie.title}
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <FaStar className="text-yellow-400" />
                <span>{movie.imdbRating}</span>
              </div>

              <div className="space-y-4 text-gray-300">

                <p>
                  <strong>Genre:</strong> {movie.genre}
                </p>

                <p>
                  <FaClock className="inline mr-2" />
                  {movie.runtime}
                </p>

                <p>
                  <FaUserTie className="inline mr-2" />
                  {movie.director}
                </p>

                <p>
                  <FaUsers className="inline mr-2" />
                  {movie.actors}
                </p>

                <p>
                  <strong>Language:</strong> {movie.language}
                </p>

              </div>

              <div className="mt-8">
                <h3 className="text-yellow-400 font-bold mb-2">
                  Story
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {movie.plot}
                </p>
              </div>

             <div className="mt-8 flex gap-4">

  <button
    onClick={onClose}
    className="flex-1 py-4 rounded-xl bg-zinc-800 border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300"
  >
    ← Go Back
  </button>

  <button
    className="flex-1 py-4 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 font-bold hover:scale-105 transition-all duration-300"
  >
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