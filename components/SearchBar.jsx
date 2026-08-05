import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="mx-auto mt-8 mb-8 w-full max-w-3xl px-1 sm:px-2">
      <div className="group relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-yellow-400 transition duration-300 group-hover:scale-110 sm:left-5 sm:text-lg" />

        <input
          type="text"
          placeholder="Search movies by title..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-2xl border border-transparent bg-zinc-900/40 py-3 pl-11 pr-4 text-sm text-white placeholder:text-gray-400 shadow-lg outline-none transition-all duration-300 hover:border-yellow-400 hover:shadow-yellow-500/40 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:shadow-yellow-500/50 sm:py-4 sm:pl-14 sm:pr-5 sm:text-base lg:text-lg"
        />
      </div>
    </div>
  );
}

export default SearchBar;