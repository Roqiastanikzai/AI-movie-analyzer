const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

const genreRecommendations = {
  Action: ["The Dark Knight", "John Wick", "Mad Max: Fury Road", "Mission: Impossible", "The Raid"],
  Adventure: ["Indiana Jones", "The Lord of the Rings", "Jungle Cruise", "Avatar", "The Mission"],
  Animation: ["Spirited Away", "Toy Story", "Coco", "Your Name", "How to Train Your Dragon"],
  Comedy: ["Groundhog Day", "The Hangover", "Bridesmaids", "The Grand Budapest Hotel", "Superbad"],
  Crime: ["Se7en", "The Godfather", "Heat", "The Departed", "No Country for Old Men"],
  Drama: ["The Shawshank Redemption", "Whiplash", "Moonlight", "La La Land", "Fight Club"],
  Fantasy: ["Harry Potter", "Pan's Labyrinth", "The Green Knight", "Fantastic Beasts", "The Chronicles of Narnia"],
  Horror: ["Get Out", "The Conjuring", "Hereditary", "A Quiet Place", "The Shining"],
  Mystery: ["Knives Out", "Shutter Island", "Gone Girl", "Memento", "Prisoners"],
  Romance: ["The Notebook", "Before Sunrise", "Crazy Rich Asians", "La La Land", "Pride and Prejudice"],
  "Sci-fi": ["Arrival", "Inception", "Interstellar", "Ex Machina", "Blade Runner 2049"],
  Thriller: ["Parasite", "Tenet", "Nightcrawler", "The Silence of the Lambs", "Shutter Island"],
};

function buildLocalAnalysis(movies) {
  const safeMovies = Array.isArray(movies) ? movies : [];

  if (!safeMovies.length) {
    return {
      analysis: "Add movies to your list and click Analyze My Taste to learn what kind of films you enjoy most.",
      recommended: [{ title: "The Dark Knight", reason: "A strong starter pick for action-driven storytelling." }],
    };
  }

  const genreCounts = {};
  let totalRating = 0;

  safeMovies.forEach((movie) => {
    const genre = (movie.genre || "Drama").trim();
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    totalRating += Number(movie.rating || 0);
  });

  const topGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Drama";
  const averageRating = (totalRating / safeMovies.length).toFixed(1);

  const favoriteTitles = safeMovies.slice(0, 3).map((movie) => movie.title).join(", ");
  const recommended = (genreRecommendations[topGenre] || genreRecommendations["Drama"]).slice(0, 5).map((title) => ({
    title,
    reason: `This matches your preference for ${topGenre} movies and your recent watch pattern.`,
  }));

  return {
    analysis: `Based on your added movies, you clearly enjoy ${topGenre} films. Your current list has an average rating of ${averageRating}/5, and your favorites include ${favoriteTitles}. This pattern suggests you are drawn to movies with strong character energy, memorable scenes, and emotionally engaging storytelling.`,
    recommended,
  };
}

export async function analyzeMovies(movies) {
  const localResult = buildLocalAnalysis(movies);

  if (!API_KEY) {
    return localResult;
  }

  try {
    const prompt = `
You are an expert movie critic.

The user watched these movies:

${(Array.isArray(movies) ? movies : [])
  .map(
    (movie) => `
Title: ${movie.title}
Genre: ${movie.genre}
Rating: ${movie.rating}/5
Review: ${movie.review}
`
  )
  .join("\n")}

Analyze the user's movie taste.

Then recommend exactly 5 movies.

Return ONLY valid JSON in this format:

{
  "analysis":"...",
  "recommended":[
    {
      "title":"Movie name",
      "reason":"Why recommended"
    }
  ]
}
`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "inclusionai/ling-3.0-flash:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Groq request failed");
    }

    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("Groq Error:", error);
    return localResult;
  }
}