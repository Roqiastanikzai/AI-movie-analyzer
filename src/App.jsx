import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from"../components/Footer";
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
    setMovies((prev) => [...prev, { ...movie, id: Data.now().toString() }]);
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
      const text = result && result.analysis ? result.analysis : JSON.stringify(result);
      setAnalysis(text);
    } catch (e) {
      console.error(e);
      setAnalysis("Failed to analyze movies. Try again later.");
    } finally {
      setIsAnalyzing(false);
    }
  };
// Fixed Structural Return and Correct Layout Framing
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      {/*3D Multi-color Navbar sitting firmly at the top edge */}
       <Navbar />
       {/*Main Structural Content Workspace Grid */}
       <main className="max-w-6xl mx-auto px-6 py-8 flex-grow w-full flex flex-col gap-6">
<div id="home">
        <MovieForm onAddMovie={addMovie} />
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        </div>
        
        <div id="movies">
<MovieList movies={filteredMovies} onDeleteMovie={deleteMovie} />
</div>
<div className="flex justify-center my-6">
  <button
  onClick={handleAnalyze}
  disabled={isAnalyzing}
  className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-black font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
  >
    {isAnalyzing ? "Analyzing..." : "Analyze My Taste"}
  </button>
</div>
{analysis && (
  <div id="analysis" className="mt-10 bg-slate-900 p-6 rounded-xl border border-red-500/20 shadow-lg shadow-red-500/50">
         
            <h2 className="text-3xl font-bold text-red-300 mb-4">
              Your Movie Personality
            </h2>
            <p className="text-gray-300 leading-relaxed">{analysis}</p>
          </div>
)}
</main>
{/*High-Contrast Opaque Matching Footer sitting at the bottom edge */}
<Footer />
        </div>
);
  }

export default App;