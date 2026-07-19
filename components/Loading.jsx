import { FaFilm } from "react-icons/fa";

function Loading() {
    return (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center z-50">
            {/*Spinning Film Reel */}
            <div className="bg-yellow-500 p-6 rounded-full shadow-2xl shadow-yellow-500/50 animate-spin">
                <FaFilm className="text-black text-6xl" />
            </div>

            {/*Title */}
            <h2 className="mt-8 text-4xl font-bold text-yellow-400">Analyzing Your Movie Taste...</h2>

            {/*Subtitle */}
            <p className="mt-4 text-gray-300 text-lg text-center max-w-md">Our AI is reading your reviews and discovering your cinematic personality.</p>

            {/*Animated Dots */}
            <div className="flex gap-3 mt-8">
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
            </div>
        </div>
    );
}

export default Loading;