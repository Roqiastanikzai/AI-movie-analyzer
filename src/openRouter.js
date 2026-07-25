const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
// Fallback: If Vite compilation did not compile the key correctly, hardcode it directly here to test
export async function analyzeMovies(movies) {
    try {
        const prompt = `You are an expert film critic. The user has watched the following movires and written reviews:
        ${movies.map(
            (movie) => 
                `Title:${movie.title}
            Rating:${movie.rating}/5
            Review:${movie.review}`
        )
        .join("\n\n")}

        Analyze the user's movie taste to provide highly personalized movie recommendations.
        Return ONLY valid JSON. Do NOT include markdown code blocks like\`\`\`json.
        You must replace the values in the template below with actual, real-world movie recommendations tailored to their watching history. Use the structure of this exampleas a strict guide:
        {  "summary" :
            "You enjoy emotional inspiring and entertaining movies with memorable characters.",
            genre:["Drama", "Comedy", "Adventure"],
        "analysis":"You have a strong appreciation for mind-bending psychologist thrillers, deeply atmospheric storytelling,and complex characterswho face massive moral dilemmas.",
         "recommended":[
         {
         "title":"Inception",
         "reason":"Since you enjoy complex, layered narratives and films that challenge your perception of reality, Christopher Nolan's masterclass on dream theft will completely captivate you." 
         },
         {
         "title":"Shutter Island",
         "reason":"Based on your love for dark mystery and psychological tension, this brilliant detective story offers a massive, unforgettable plot twist that aligns perfectly with your taste."
         },
         {
         "title":"Interstellar",
         "reason":"This film beautifully combines high-concept sci-fi concepts with a deeply emotional, human-driven core narrative about survival and family bonds."
         }

         ]
        }`;
        // 2. Safely read your configured keys
        const apiKey  = import.meta.env.VITE_OPENROUTER_API_KEY 
        console.log(apiKey);
        // 3. Post to the correct operational backend endpoint path 
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method:"POST",
            headers:{Authorization:`Bearer ${apiKey.trim()}`,
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                model:"google/gemma-4-31b-it:free",
                messages:[{
                    role:"user",
                    content:prompt,
                },
            ],
            temprature:0.7,
            }),
        });
        // 4. Capture the server data stream
        const data = await response.json();
        console.log(data);
        // 5. Catch API error statuses or bad responses immediatly
        if (!response.ok || data.error) {
            console.error("OpenRouter API Error Details:", data.error);
            throw new Error(data.error?.message || `API request failed with status ${response.status}`);
        }
        
        if (!data.choices || data.choices.length === 0) {
            throw new Error("No response choices returned from the AI model.");
        // 6. Extract the string and pass it out as an parsed JavaScript object
        }
        const text = data.choices[0].message.content;
        return JSON.parse(text); 
    } catch (error) {
        console.error("Failed to analyze movies:", error);
        alert(`Analysis Failed: ${error.message}`); // Shows you the exact error on screen
        throw error;
         }
        }
    
