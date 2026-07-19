const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const API_URL ="https://openrouter.ai/api/v1/chat/completions";
export async function analyzeMovies(movies) {
    try {
        const prompt = `You are an expert film critic. The user has watched the following movires and written reviews:
        ${movies.map(
            (movie) => 
                `Title:${movie.title}
            Ratinh:${movie.rating}/5
            Review:${movie.review}`
        )
        .join("\n\n")}
        Analyze the user's movie taste.
        Return ONLY valid JSON in this exact format:{
        "analysis":"A short paragraph describing the user's movie taste.",
        "recommended."
        },
        {
        "title":"Movie Name"
        "reason":"Why it is recommended."},
         {
        "title":"Movie Name"
        "reason":"Why it is recommended."},
         {
        "title":"Movie Name"
        "reason":"Why it is recommended."},
         {
        "title":"Movie Name"
        "reason":"Why it is recommended."},
         {
        "title":"Movie Name"
        "reason":"Why it is recommended."},
        }
    ]
    }
        `;
        const response = await fetch(API_URL, {
            method:"POST",
            header:{Authorization:`Bearer $ {API_KEY}`,
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                model:"openai/gpt-4.1-mini",
                messages:[{
                    role:"user",
                    content:prompt,
                },
            ],
            temprature:0.7,
            }),
        });
        const data = await response.json();
        const text = data.choices[0].message.content;
        return JSON.parse(text); 
    } catch (error) {
        console.error(error);
        return{
            summary :
            "You enjoy emotional inspiring and entertaining movies with memorable characters.",
            genre:["Drama", "Comedy", "Adventure"],
            recommendation:[{
                title:"Movie Name",
                reason:"Why it is recommended"},
                {title:"Movie Name",
                reason:"Why is it recommended"},
                 {title:"Movie Name",
                reason:"Why is it recommended"},
                 {title:"Movie Name",
                reason:"Why is it recommended"},
         {title:"Movie Name",
                reason:"Why is it recommended"},
        ]
        };
    }
    
}