const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

// Search a movie by title
export async function searchMovie(title) {
    if (!API_KEY) {
        console.warn("OMDb API key is missing.");
        return null;
    }

    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
        const data = await response.json();

        if (data.Response === "False") {
            return null;
        }

        return {
            title: data.Title,
            year: data.Year,
            poster: data.Poster && data.Poster !== "N/A" ? data.Poster : "",
            imdbRating: data.imdbRating,
            plot: data.Plot,
        };
    } catch (error) {
        console.error("Movie API Error:", error);
        return null;
    }
}

// Search multiple movies
export async function searchMovies(movieTitle) {
    const movie = await Promise.all(movieTitle.map((title) => searchMovie(title)));
    return movie.filter((movie) => movie !== null);
}