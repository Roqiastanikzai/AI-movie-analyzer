import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieForm from "../components/MovieForm";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { analyzeMovies } from "./openRouter";

function App() {
  const [movies, setMovies] = useState(() => {
    try {
      const raw = localStorage.getItem("movies");
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list.map(m => ({ ...m, poster: m.poster || "" })) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies((prev) => [movie, ...prev]);
    setAnalysis(`Analyzed "${movie.title}" successfully.`);
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAnalyze = async () => {
    if (!movies || movies.length === 0) {
      setAnalysis("Add some movies first to analyze your taste.");
      return;
    }
    setIsAnalyzing(true);
    try {
      const result = await analyzeMovies(movies);
      // result may be an object or string; prefer `analysis` field
      const text = result && result.analysis ? result.analysis : JSON.stringify(result);
      setAnalysis(text);
    } catch (e) {
      console.error(e);
      setAnalysis("Failed to analyze movies. Try again later.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
       <Navbar />
      <div id="home" className="max-w-6xl mx-auto px-6 py-8">
        <MovieForm onAddMovie={addMovie} />
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <div className="flex justify-center my-6">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-black font-bold rounded-lg hover:from-red-400 hover:to-yellow-400 transition disabled:opacity-50"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze My Taste"}
          </button>
        </div>
        <div id="movies">
<MovieList movies={filteredMovies} deleteMovie={deleteMovie} />
</div>
         <div id="analysis">{analysis && (
          <div className="mt-10 bg-zinc-900 p-6 rounded-xl border border-red-400/70 shadow-lg shadow-red-500/20">
            <h2 className="text-3xl font-bold text-red-300 mb-4">
              Your Movie Personality
            </h2>
            <p>{analysis}</p>
          </div>

        )}
        </div>
        <footer className="mt-10 border-t border-red-400/20 py-6 text-center">
        <h3 className="text-lg font-bold test-red-300">Contact Information</h3>
          <p className="mt-2">
         Developed and designed by <strong> Roqia Stanikzai </strong>           
          </p>
          <p>Email: <a
          href="mailto:roqiastanikzai5@gmail.com" className="text-yellow-400 hover:underline">roqiastanikzai5@gmail.com</a>
          </p>
          <p>Phone:
            <a href="tel:0764927235" className="text-yellow-400 hover:underline">0764927235</a>
          </p>
        </footer>
      </div>
      </div>
  );
  
}

export default App;