import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from"../components/Footer";
import MovieForm from "../components/MovieForm";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import LandingPage from "./LandingPage";
import { analyzeMovies } from "./groq";
import DiscoverMovies from "../components/DiscoverMovies";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    setMovies((prev) => [...prev, { ...movie, id: Date.now().toString() }]);
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAnalyze = async () => {
  if (movies.length === 0) {
    alert("Please add some movies first.");
    return;
  }

  setIsAnalyzing(true);

  try {
    const result = await analyzeMovies(movies);

    setAnalysis(result);
  } catch (error) {
    console.error("Groq Error:", error);
    alert(error.message);
  } finally {
    setIsAnalyzing(false);
  }
};
// Fixed Structural Return and Correct Layout Framing
if (!isLoggedIn) {
  return <LandingPage onEnterApp={() => setIsLoggedIn(true)} />;
}
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      {/*3D Multi-color Navbar sitting firmly at the top edge */}
       <Navbar onGoHome={() => setIsLoggedIn(false)} />
       {/*Main Structural Content Workspace Grid */}
       <main className="max-w-6xl mx-auto px-6 py-8 flex-grow w-full flex flex-col gap-6">
        <div id="home" className="space-y-8">
  <MovieForm onAddMovie={addMovie} />

  <DiscoverMovies />

  <SearchBar
    searchTerm={searchTerm}
    onSearch={setSearchTerm}
  />
</div>
        
        <div id="movies">
<MovieList
  movies={filteredMovies}
  deleteMovie={deleteMovie}
/>
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
  <div
    id="analysis"
    className="mt-10 bg-slate-900 p-6 rounded-xl border border-red-500/20 shadow-lg shadow-red-500/50"
  >
    <h2 className="text-3xl font-bold text-red-300 mb-6">
      Your Movie Personality
    </h2>

    <p className="text-gray-300 leading-relaxed mb-8">
      {analysis.analysis}
    </p>

    <h3 className="text-2xl font-bold text-yellow-400 mb-4">
      AI Recommended Movies
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {analysis.recommended.map((movie, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-xl p-4 border border-yellow-500/20"
        >
          <h4 className="text-xl font-bold text-yellow-300">
            {movie.title}
          </h4>

          <p className="text-gray-400 mt-2">
            {movie.reason}
          </p>
        </div>
      ))}
    </div>
  </div>
)}
</main>
{/* Fixed: Proper JSX comment block syntaxused here */}
{/*High-Contrast Opaque Matching Footer sitting at the bottom edge */}
<Footer />
        </div>
);
  }

export default App;