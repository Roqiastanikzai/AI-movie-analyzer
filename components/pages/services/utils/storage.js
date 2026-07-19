const STORAGE_KEY = "movieAnalyzerMovies";

// Get all saved movies
export const getMovies = () => {
    const movies = localStorage.getItem(STORAGE_KEY);
    if (!movies) return [];
    try {
        return JSON.parse(movies);
    } catch (e) {
        console.error(e);
        return [];
    }
};

// Save all movies
export const saveMovies = (movies) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies || []));
};

// Add a new movie
export const addMovie = (movie) => {
    const movies = getMovies();
    movies.push(movie);
    saveMovies(movies);
};

// Delete a movie
export const deleteMovie = (id) => {
    const movies = getMovies().filter((movie) => movie.id !== id);
    saveMovies(movies);
};

// Clear all movies
export const clearMovies = () => {
    localStorage.removeItem(STORAGE_KEY);
};
