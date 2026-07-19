import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, onSearch }) {
    return (
        <div className="max-w-3xl mx-auto mt-8 mb-8">
            <div className="relative group">
                {/*search Icon */}
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400 text-lg transition duration-300 group-hover:scale-110" />

                {/*Input */}
                <input
                    type="text"
                    placeholder="Search movies by title..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full pl-14 pr-5 py-4 rounded-2xl bg-zinc-900/40 text-white placeholder:text-gray-400 text-lg outline-none shadow-lg transition-all duration-300 hover:border-yellow-400 hover:shadow-yellow-500/40 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:shadow-yellow-500/50"
                />
            </div>
        </div>
    );
}

export default SearchBar;