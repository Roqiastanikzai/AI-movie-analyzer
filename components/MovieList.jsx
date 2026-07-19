import MovieCard from "./MovieCard";

function MovieList({ movies, deleteMovie }) {
    if (!movies || movies.length === 0) {
        return (
            <div className="text-center mt-12">
                <h2 className="text-3xl font-bold text-yellow-400 mb-3">No Movies Added Yet</h2>
                <p className="text-gray-400 text-lg">Add your first movie review to begin analyzing your cinematic taste.</p>
            </div>
        );
    }

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">My Movie Collection</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;