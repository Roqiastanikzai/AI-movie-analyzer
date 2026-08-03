import { FaFilm } from "react-icons/fa";

function Navbar({ currentPage, onNavigate, onGoHome }) {
  const navItems = [
    { key: "home", label: "Home" },
    { key: "contact", label: "Contact" },
    { key: "features", label: "Features" },
    { key: "movies", label: "My Movies" },
    { key: "feedback", label: "Feedback" },
    { key: "about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 py-3 sm:px-5 lg:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-yellow-500 p-2 shadow-[0_0_15px_rgba(239,68,68,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)]">
                <FaFilm className="text-xl text-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
              </div>
              <h1 className="text-lg font-extrabold bg-gradient-to-r from-red-400 via-purple-400 via-indigo-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-xl lg:text-2xl">
                AI Movie Analyzer
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end sm:gap-3 lg:gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  if (item.key === "home") {
                    onGoHome();
                    return;
                  }
                  onNavigate(item.key);
                }}
                className={`cursor-pointer rounded-full px-2.5 py-2 text-[10px] tracking-wide transition-all duration-300 sm:px-3 sm:text-xs lg:px-4 lg:text-sm ${
                  currentPage === item.key
                    ? item.key === "contact"
                      ? "scale-105 border border-pink-500/40 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                      : item.key === "features"
                        ? "scale-105 border border-yellow-500/40 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 text-white shadow-[0_0_15px_rgba(234,179,8,0.35)]"
                        : item.key === "movies"
                          ? "scale-105 border border-indigo-500/40 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-cyan-500/20 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                          : item.key === "feedback"
                            ? "scale-105 border border-amber-500/40 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 text-white shadow-[0_0_15px_rgba(251,191,36,0.35)]"
                            : item.key === "about"
                              ? "scale-105 border border-emerald-500/40 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                              : "scale-105 border border-purple-500/40 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-indigo-500/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "text-gray-300 hover:bg-slate-800/40 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-purple-500 via-indigo-500 via-cyan-500 to-yellow-500 bg-[length:200%_auto] animate-gradient" />
    </nav>
  );
}

export default Navbar;