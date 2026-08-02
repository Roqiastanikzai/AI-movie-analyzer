import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

function LandingNavbar({ onEnterApp }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-400 sm:h-11 sm:w-11">
            <FaRobot className="text-lg text-black sm:text-xl" />
          </div>

          <div>
            <h1 className="text-sm font-black text-white sm:text-xl">AI Movie Analyzer</h1>
            <p className="text-[10px] text-gray-400 sm:text-xs">Smart Movie Companion</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-semibold text-gray-300 transition hover:text-yellow-400">
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className="font-semibold text-gray-300 transition hover:text-yellow-400">
            Features
          </button>
          <button onClick={() => scrollToSection("about")} className="font-semibold text-gray-300 transition hover:text-yellow-400">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="font-semibold text-gray-300 transition hover:text-yellow-400">
            Contact
          </button>
        </div>

        <button
          onClick={onEnterApp}
          className="rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 px-3 py-2 text-xs font-bold text-black shadow-lg transition hover:scale-105 sm:px-5 sm:py-3 sm:text-sm"
        >
          Open App
        </button>
      </div>
    </motion.nav>
  );
}

export default LandingNavbar;