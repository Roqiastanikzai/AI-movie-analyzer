import Navbar from "../Navbar";
import MovieForm from "../MovieForm";
import SearchBar from "../SearchBar";
import MovieList from "../MovieList";
function Home ({
    movies,
    addMovie,
    deleteMovie,
    searchTerm,
    setSearchTerm,
}) {
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);
return (
    <div className="min-h-screen bg-black text-white">
        <Navbar />
        {/*Hero Section */}
        <section className="text-center py-16 px-6">
            <div className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">AI Movie Analyzer</div>
            <div className="text-3xl mx-auto text-gray-300 text-lg">Track your favorite movies, write reviews, rate them and let AI discover your cinematic personality while recommending movies you will love.</div>
        </section>
        {/*Add Movie Form */}
        <div className="max-w-6xl mx-auto px-6">
            <MovieForm 
            addMovie={addMovie} />
            {/*SearchBar*/}
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            {/*Movie List */}
            <MovieList
            movies={filteredMovies}
            deleteMovie={deleteMovie}/>
        </div>
    </div>
);
}
export default Home;