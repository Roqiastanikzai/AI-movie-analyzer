const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function recommendMoviesByGenre(genre) {
  const prompt = `
You are a movie expert.

Recommend exactly 10 popular ${genre} movies.

Return ONLY a valid JSON array.

Example:

[
  "The Dark Knight",
  "John Wick",
  "Mad Max: Fury Road"
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

    // Remove markdown if the AI returns it
    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(content);
  } catch (error) {
    console.error("Recommendation Error:", error);
    throw error;
  }
}