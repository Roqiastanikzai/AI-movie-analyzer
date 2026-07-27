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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-400 flex items-center justify-center">

            <FaRobot className="text-black text-xl" />

          </div>

          <div>

            <h1 className="text-xl font-black text-white">
              AI Movie Analyzer
            </h1>

            <p className="text-xs text-gray-400">
              Smart Movie Companion
            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-10">

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-300 hover:text-yellow-400 transition font-semibold"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-300 hover:text-yellow-400 transition font-semibold"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-yellow-400 transition font-semibold"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-yellow-400 transition font-semibold"
          >
            Contact
          </button>

        </div>

        {/* Go To Project Button */}

        <button
          onClick={onEnterApp}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Go To Project
        </button>

      </div>
    </motion.nav>
  );
}

export default LandingNavbar;