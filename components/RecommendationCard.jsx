import { FaFilm } from "react-icons/fa";

function RecommendationCard({ movie }) {
    return (
        <div className="bg-zinc-900/80 backdrop-blur-md border border-yellow-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/40">
            {/*Movie Poster */}
            <img
                src={movie.poster || "https://via.placeholder.com/300x450?text=Movie+Poster"}
                alt={movie.title}
                className="w-full h-80 object-cover"
            />
            {/*Movie Details */}
            <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                    <FaFilm 
                    className="text-yellow-400 text-xl"/>
                                        <h2 className="text-2xl font-bold text-yellow-400">{movie.title}</h2>
                </div>
                                <div className="bg-black/40 p-4 rounded-lg border border-yellow-500/30">
                                    <h3 className="text-yellow-300 font-semibold mb-2">Why we Recommend It</h3>
                                    <p className="text-gray-300 leading-relaxed">{movie.reason}</p>
                                </div>
            </div>
        </div>
    );
}
export default RecommendationCard;