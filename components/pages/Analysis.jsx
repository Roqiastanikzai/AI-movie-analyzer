import RecommendationCard from "../RecommendationCard";
import Loading from "../Loading";

function Analysis({ loading, analysis, recommendations }) {
    if(loading) {
        return <Loading />;
    }
    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-yellow-400 mb-10">Your Cinematic Personality</h1>
                {/*AI Analysis */}
                                <div className="bg-zinc-900/80 backdrop-blur-md border border-yellow-500 rounded-2xl p-8 shadow-lg mb-10">
                                    {analysis && (
                                        <div className="bg-black/40 p-4 rounded-lg mb-6">
                                            <h3 className="text-yellow-300 font-semibold mb-2">AI Analysis Summary</h3>
                                            <p className="text-gray-300">{analysis}</p>
                                        </div>
                                    )}
                                    <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Movies Recommended For You</h2>
                {recommendations.length === 0 ?(
                    <div className="text-center text-gray-400 text-xl">No recommendations yet.</div>
                ) : (
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {recommendations.map((movie) => (
                        <RecommendationCard
                        key={movie.title}
                        movie={movie}/>
                    ))}
                    </div>
                )} 
                </div>
            </div>
            </div>
    );
}
export default Analysis;