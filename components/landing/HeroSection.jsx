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
    <section className="relative flex min-h-screen items-center justify-center px-4 sm:px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl sm:px-6"
        >
          <FaRobot className="text-xl text-yellow-400" />
          <span className="text-sm font-medium text-gray-300 sm:text-base">
            AI Powered Movie Recommendation Platform
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <GlassTitle />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg md:text-xl md:leading-8"
        >
          Discover your cinematic personality using Artificial Intelligence. Track movies, write reviews,
          organize your collection, receive personalized recommendations and explore thousands of amazing films.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row"
        >
          <button
            onClick={onEnterApp}
            className="rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 px-6 py-3 text-base font-bold text-black shadow-xl transition hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
          >
            Launch Workspace
            <FaArrowRight className="ml-3 inline" />
          </button>

          <a
            href="#features"
            className="rounded-full border border-purple-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-purple-500/20 sm:px-8 sm:py-4 sm:text-lg"
          >
            Explore Features
          </a>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:mt-24">
          <motion.div whileHover={{ y: -10 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <FaFilm className="mx-auto mb-4 text-4xl text-red-400 sm:text-5xl" />
            <h2 className="text-3xl font-black sm:text-4xl">10K+</h2>
            <p className="mt-2 text-gray-400">Movies Available</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <FaBrain className="mx-auto mb-4 text-4xl text-purple-400 sm:text-5xl" />
            <h2 className="text-3xl font-black sm:text-4xl">AI</h2>
            <p className="mt-2 text-gray-400">Movie Personality Analysis</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <FaMagic className="mx-auto mb-4 text-4xl text-yellow-400 sm:text-5xl" />
            <h2 className="text-3xl font-black sm:text-4xl">Smart</h2>
            <p className="mt-2 text-gray-400">Movie Recommendations</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <FaChartLine className="mx-auto mb-4 text-4xl text-green-400 sm:text-5xl" />
            <h2 className="text-3xl font-black sm:text-4xl">Fast</h2>
            <p className="mt-2 text-gray-400">AI Insights</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;