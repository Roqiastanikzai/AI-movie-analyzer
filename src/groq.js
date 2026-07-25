const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function analyzeMovies(movies) {
  const prompt = `
You are an expert movie critic.

The user watched these movies:

${movies
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
      model: "llama-3.3-70b-versatile",
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
}