import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieForm from "../components/MovieForm";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import LandingPage from "./LandingPage";
import { analyzeMovies } from "./groq";
import DiscoverMovies from "../components/DiscoverMovies";
import FeatureSection from "../components/landing/FeatureSection";
import AboutSection from "../components/landing/AboutSection";
import FeedbackPage from "../components/pages/FeedbackPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("movies");
  const [movies, setMovies] = useState(() => {
    try {
      const raw = localStorage.getItem("movies");
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list.map((m) => ({ ...m, poster: m.poster || "" })) : [];
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
      setAnalysis({
        analysis:
          "Your movie list shows a strong, personalized taste. The AI preview is available because the external API is currently unavailable, but your ratings and reviews are still being tracked successfully.",
        recommended: [
          { title: "The Dark Knight", reason: "A strong match for dramatic tension and iconic character work." },
          { title: "Arrival", reason: "This fits thoughtful storytelling and emotional depth." },
          { title: "Spirited Away", reason: "A visually rich pick for imaginative cinematic experiences." },
          { title: "Inception", reason: "Perfect for viewers who enjoy layered, immersive narratives." },
          { title: "The Social Network", reason: "Great for sharp, fast-paced modern storytelling." },
        ],
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "contact":
        return (
          <div className="mx-auto w-full max-w-5xl px-4 py-10">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <h1 className="mb-8 text-center text-4xl font-black text-white sm:text-5xl">
                Contact Details
              </h1>
              <Footer />
            </div>
          </div>
        );
      case "features":
        return (
          <div className="w-full px-4 py-10">
            <FeatureSection />
          </div>
        );
      case "movies":
        return (
          <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10">
            <MovieForm onAddMovie={addMovie} />

            <div className="flex justify-center">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full max-w-md rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 px-6 py-3 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze My Taste"}
              </button>
            </div>

            <DiscoverMovies />
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <MovieList movies={filteredMovies} deleteMovie={deleteMovie} />

            {analysis && (
              <div className="rounded-xl border border-red-500/20 bg-slate-900 p-4 shadow-lg shadow-red-500/50 sm:p-6">
                <h2 className="mb-6 text-2xl font-bold text-red-300 sm:text-3xl">
                  Your Movie Personality
                </h2>

                <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {analysis.analysis}
                </p>

                <h3 className="mb-4 text-xl font-bold text-yellow-400 sm:text-2xl">
                  AI Recommended Movies
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {analysis.recommended.map((movie, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-yellow-500/20 bg-slate-800 p-4"
                    >
                      <h4 className="text-lg font-bold text-yellow-300 sm:text-xl">
                        {movie.title}
                      </h4>

                      <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        {movie.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      case "feedback":
        return <FeedbackPage />;
      case "about":
        return (
          <div className="w-full px-4 py-10">
            <AboutSection />
          </div>
        );
      default:
        return (
          <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10">
            <MovieForm onAddMovie={addMovie} />

            <div className="flex justify-center">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full max-w-md rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 px-6 py-3 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze My Taste"}
              </button>
            </div>

            <DiscoverMovies />
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <MovieList movies={filteredMovies} deleteMovie={deleteMovie} />

            {analysis && (
              <div className="rounded-xl border border-red-500/20 bg-slate-900 p-4 shadow-lg shadow-red-500/50 sm:p-6">
                <h2 className="mb-6 text-2xl font-bold text-red-300 sm:text-3xl">
                  Your Movie Personality
                </h2>

                <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {analysis.analysis}
                </p>

                <h3 className="mb-4 text-xl font-bold text-yellow-400 sm:text-2xl">
                  AI Recommended Movies
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {analysis.recommended.map((movie, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-yellow-500/20 bg-slate-800 p-4"
                    >
                      <h4 className="text-lg font-bold text-yellow-300 sm:text-xl">
                        {movie.title}
                      </h4>

                      <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        {movie.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  if (!isLoggedIn) {
    return <LandingPage onEnterApp={() => { setIsLoggedIn(true); setCurrentPage("movies"); }} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onGoHome={() => setIsLoggedIn(false)}
      />

      <main className="mx-auto flex w-full max-w-[90rem] flex-grow flex-col gap-5 px-2 py-5 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;