import Navbar from "../Navbar";
import MovieForm from "../MovieForm";
import SearchBar from "../SearchBar";
import MovieList from "../MovieList";
import { useState } from "react";
function Home() {
// Assuming these states/functions exist or are passed down.
// If they are props, change the line above to: function home({movies, addMovie, deleteMovie })
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
};
const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
};
// Safe guard added with (movies || []) so it won't crash if data is empty
   
    const filteredMovies = (movies || []).filter((movie) => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);
return (
    <div className="min-h-screen bg-black text-white">
        <Navbar />
        {/*Hero Section */}
        <section className="text-center py-16 px-6">
            <div className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">AI Movie Analyzer</div>
            <div className=" mx-auto text-gray-300 text-lg">Track your favorite movies, write reviews, rate them and let AI discover your cinematic personality while recommending movies you will love.</div>
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