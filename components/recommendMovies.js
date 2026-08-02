const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

const fallbackGenreMovies = {
  Action: [
    "The Dark Knight",
    "John Wick",
    "Mad Max: Fury Road",
    "Mission: Impossible",
    "Dune",
    "Shershaah",
    "Uri: The Surgical Strike",
    "War",
    "KGF: Chapter 2",
    "Jawan",
  ],
  Adventure: [
    "Indiana Jones",
    "The Lord of the Rings",
    "Pirates of the Caribbean",
    "Avatar",
    "Jungle Cruise",
    "Dilwale Dulhania Le Jayenge",
    "Lagaan",
    "Taare Zameen Par",
    "3 Idiots",
    "Swades",
  ],
  Animation: [
    "Spirited Away",
    "Toy Story",
    "Coco",
    "How to Train Your Dragon",
    "The Iron Giant",
    "Hanuman",
    "Delhi Safari",
    "Motu Patlu",
    "The Lion King",
    "Frozen",
  ],
  Comedy: [
    "The Hangover",
    "Superbad",
    "Groundhog Day",
    "The Grand Budapest Hotel",
    "Bridesmaids",
    "Hera Pheri",
    "Andaz Apna Apna",
    "3 Idiots",
    "Golmaal",
    "Welcome",
  ],
  Crime: [
    "Heat",
    "Se7en",
    "The Godfather",
    "No Country for Old Men",
    "City of God",
    "Sacred Games",
    "Gangs of Wasseypur",
    "Udta Punjab",
    "Black Friday",
    "Kahaani",
  ],
  Drama: [
    "The Shawshank Redemption",
    "Fight Club",
    "Whiplash",
    "La La Land",
    "Moonlight",
    "Dangal",
    "PK",
    "Taare Zameen Par",
    "Zindagi Na Milegi Dobara",
    "Queen",
  ],
  Fantasy: [
    "The Chronicles of Narnia",
    "Pan's Labyrinth",
    "Harry Potter",
    "Fantastic Beasts",
    "The Green Knight",
    "Baahubali: The Beginning",
    "Brahmāstra",
    "Tanhaji",
    "Adipurush",
    "Hawaizaada",
  ],
  Horror: [
    "Get Out",
    "The Conjuring",
    "Hereditary",
    "The Shining",
    "A Quiet Place",
    "Raat",
    "Bhoot",
    "Pari",
    "Bhool Bhulaiyaa",
    "Stree",
  ],
  Mystery: [
    "Knives Out",
    "Shutter Island",
    "Gone Girl",
    "Prisoners",
    "Memento",
    "Kahaani",
    "Detective Byomkesh Bakshy!",
    "Talvar",
    "Andhadhun",
    "Ek Hasina Thi",
  ],
  Romance: [
    "Before Sunrise",
    "The Notebook",
    "Crazy Rich Asians",
    "La La Land",
    "Pride and Prejudice",
    "Dilwale Dulhania Le Jayenge",
    "Kabir Singh",
    "Ae Dil Hai Mushkil",
    "Jab We Met",
    "Yeh Jawaani Hai Deewani",
  ],
  "Sci-fi": [
    "Arrival",
    "Interstellar",
    "Blade Runner 2049",
    "Ex Machina",
    "Dune",
    "Koi Mil Gaya",
    "Robot 2.0",
    "Aarambam",
    "PK",
    "M.S. Dhoni: The Untold Story",
  ],
  Thriller: [
    "Parasite",
    "Shutter Island",
    "The Silence of the Lambs",
    "Nightcrawler",
    "Tenet",
    "Andhadhun",
    "Talvar",
    "Drishyam",
    "Baazigar",
    "Kahaani",
  ],
};

export async function recommendMoviesByGenre(genre) {
  const safeGenre = genre || "Action";

  if (!API_KEY) {
    return fallbackGenreMovies[safeGenre] || fallbackGenreMovies.Action;
  }

  const prompt = `
You are a movie expert.

Recommend exactly 10 popular ${safeGenre} movies from both Hollywood and Bollywood.

Return ONLY a valid JSON array.

Example:

[
  "The Dark Knight",
  "John Wick",
  "Shershaah",
  "Dangal",
  "3 Idiots"
]

Do not include explanations, markdown, or code blocks.
`;

  try {
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

    console.log("Groq Response:", data);

    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to get recommendations.");
    }

    let content = data.choices?.[0]?.message?.content || "";

    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(content);
  } catch (error) {
    console.error("Recommendation Error:", error);
    return fallbackGenreMovies[safeGenre] || fallbackGenreMovies.Action;
  }
}