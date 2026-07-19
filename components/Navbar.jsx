import { FaFilm } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-red-400/60 shadow-lg shadow-red-500/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="bg-gradient-to-br from-red-500 to-yellow-500 p-3 rounded-full shadow-lg shadow-red-500/40">
                        <FaFilm className="text-black text-2xl" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-red-400 via-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wide">
                            AI Movie Analyzer
                        </h1>
                        <p className="text-gray-300 text-sm">Personality</p>
                    </div>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
                    <li className="cursor-pointer hover:text-yellow-400 transition duration-300">Home</li>
                    <li className="cursor-pointer hover:text-yellow-400 transition duration-300">My Movies</li>
                    <li className="cursor-pointer hover:text-yellow-400 transition duration-300">AI analysis</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;