import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaFilm,
  FaMagic,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";
import GlassTitle from "../GlassTitle";

function HeroSection({ onEnterApp }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      <div className="max-w-7xl mx-auto text-center">

        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3"
        >
          <FaRobot className="text-yellow-400 text-xl" />
          <span className="text-gray-300 font-medium">
            AI Powered Movie Recommendation Platform
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <GlassTitle />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8"
        >
          Discover your cinematic personality using Artificial Intelligence.
          Track movies, write reviews, organize your collection,
          receive personalized recommendations and explore thousands
          of amazing films.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <button
            onClick={onEnterApp}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-black font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            Launch Workspace
            <FaArrowRight className="inline ml-3" />
          </button>

          <a
            href="#features"
            className="px-8 py-4 rounded-full border border-purple-500 text-white font-semibold hover:bg-purple-500/20 transition"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-24">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <FaFilm className="text-red-400 text-5xl mx-auto mb-4" />
            <h2 className="text-4xl font-black">10K+</h2>
            <p className="text-gray-400 mt-2">Movies Available</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <FaBrain className="text-purple-400 text-5xl mx-auto mb-4" />
            <h2 className="text-4xl font-black">AI</h2>
            <p className="text-gray-400 mt-2">Movie Personality Analysis</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <FaMagic className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h2 className="text-4xl font-black">Smart</h2>
            <p className="text-gray-400 mt-2">Movie Recommendations</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <FaChartLine className="text-green-400 text-5xl mx-auto mb-4" />
            <h2 className="text-4xl font-black">Fast</h2>
            <p className="text-gray-400 mt-2">AI Insights</p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;