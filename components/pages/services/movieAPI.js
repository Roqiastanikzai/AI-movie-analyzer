const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const fallbackPoster = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80";

export async function searchMovie(title) {
  if (!API_KEY) {
    console.warn("OMDb API key is missing. Showing demo movie info.");
    return {
      title: title || "Featured Movie",
      year: "2024",
      poster: fallbackPoster,
      imdbRating: "8.5",
      genre: "Drama",
      plot: "A featured movie recommendation for your collection.",
      director: "AI Movie Analyzer",
      actors: "AI-powered recommendation",
      runtime: "120 min",
      language: "English",
    };
  }

  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      return null;
    }

    return {
      title: data.Title,
      year: data.Year,
      poster: data.Poster !== "N/A" ? data.Poster : fallbackPoster,
      imdbRating: data.imdbRating,
      genre: data.Genre,
      plot: data.Plot,
      director: data.Director,
      actors: data.Actors,
      runtime: data.Runtime,
      language: data.Language,
    };
  } catch (error) {
    console.error("Movie API Error:", error);
    return {
      title: title || "Featured Movie",
      year: "2024",
      poster: fallbackPoster,
      imdbRating: "8.5",
      genre: "Drama",
      plot: "A featured movie recommendation for your collection.",
      director: "AI Movie Analyzer",
      actors: "AI-powered recommendation",
      runtime: "120 min",
      language: "English",
    };
  }
}

export async function searchMovies(movieTitles) {
  const movies = await Promise.all(
    movieTitles.map((title) => searchMovie(title))
  );

  return movies.filter(Boolean);
}