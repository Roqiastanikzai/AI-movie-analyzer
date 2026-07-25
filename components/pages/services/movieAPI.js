const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// Search a movie by title
export async function searchMovie(title) {
  if (!API_KEY) {
    console.warn("OMDb API key is missing.");
    return null;
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
      poster: data.Poster !== "N/A" ? data.Poster : "",
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
    return null;
  }
}

// Search multiple movies
export async function searchMovies(movieTitles) {
  const movies = await Promise.all(
    movieTitles.map((title) => searchMovie(title))
  );

  return movies.filter(Boolean);
}