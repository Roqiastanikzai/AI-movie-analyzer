import MovieCard from "./MovieCard";

function MovieList({ movies, deleteMovie }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="mt-8 text-center sm:mt-12">
        <h2 className="mb-3 text-2xl font-bold text-yellow-400 sm:text-3xl">No Movies Added Yet</h2>
        <p className="mx-auto max-w-xl text-sm text-gray-400 sm:text-base lg:text-lg">
          Add your first movie review to begin analyzing your cinematic taste.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 w-full sm:mt-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400 sm:text-3xl lg:text-4xl">
        My Movie Collection
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;