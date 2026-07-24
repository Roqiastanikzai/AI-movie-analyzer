import {
  FaFilm,
  FaBrain,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaRobot,
  FaMagic,
} from "react-icons/fa";

import { motion } from "framer-motion";
import GlassTitle from "../components/GlassTitle";

function LandingPage({ onEnterApp }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Red Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-500 blur-[170px]"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600 blur-[180px]"
        />

        {/* Yellow Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 w-[350px] h-[350px] rounded-full bg-yellow-500/20 blur-[140px] -translate-x-1/2 -translate-y-1/2"
        />

      </div>

      {/* ================= Floating Icons ================= */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute left-12 top-44 text-red-500/20 text-7xl"
      >
        <FaFilm />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute right-10 top-56 text-yellow-400/20 text-6xl"
      >
        <FaStar />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-36 left-1/2 text-purple-500/20 text-7xl"
      >
        <FaBrain />
      </motion.div>

      {/* ================= Main Content ================= */}

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ================= Header ================= */}

        <header className="max-w-7xl w-full mx-auto px-8 py-6 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.15,
              }}
              transition={{ duration: 0.6 }}
              className="p-3 rounded-2xl bg-gradient-to-br from-red-500 via-purple-500 to-yellow-400 shadow-2xl"
            >
              <FaFilm className="text-black text-xl" />
            </motion.div>

            <h1 className="text-3xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
              AI Movie Analyzer
            </h1>

          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onEnterApp}
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
          >
            Sign In
          </motion.button>

        </header>        {/* ================= Hero Section ================= */}

        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">

          {/* AI Badge */}

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">

              <FaRobot className="text-purple-400" />

              <span className="text-slate-300 font-medium">
                Powered by Advanced Artificial Intelligence
              </span>

            </div>

          </motion.div>

          {/* Interactive Title */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <GlassTitle />
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            Build your personal movie collection, receive intelligent
            recommendations, discover hidden patterns in your taste,
            and let AI reveal your unique cinematic personality.
          </motion.p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-6 mt-12">

            <motion.button
              whileHover={{
                scale: 1.05,
                rotateX: 8,
                rotateY: -8,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnterApp}
              className="relative px-10 py-5 rounded-2xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 font-bold text-lg shadow-2xl"
            >

              <div className="flex items-center gap-3">

                <FaPlay />

                Launch Workspace

                <FaArrowRight />

              </div>

            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl font-semibold"
            >
              Learn More
            </motion.button>

          </div>

          {/* Statistics */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 w-full max-w-5xl"
          >

            <div>
              <h2 className="text-4xl font-black text-red-400">
                10K+
              </h2>

              <p className="text-slate-400 mt-2">
                Movies Tracked
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-purple-400">
                98%
              </h2>

              <p className="text-slate-400 mt-2">
                AI Accuracy
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-yellow-400">
                500+
              </h2>

              <p className="text-slate-400 mt-2">
                Recommendations
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-cyan-400">
                24/7
              </h2>

              <p className="text-slate-400 mt-2">
                AI Assistant
              </p>
            </div>

          </motion.div>

          {/* Features */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 w-full max-w-6xl">
                        {/* Feature Card 1 */}

            <motion.div
              whileHover={{
                y: -15,
                rotateX: 8,
                rotateY: -8,
                scale: 1.04,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-400 text-2xl mb-6">
                <FaFilm />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Smart Watchlists
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Organize your favorite movies into one beautiful library.
                Instantly search, edit, rate, and manage every film you've
                watched with an elegant interface.
              </p>

            </motion.div>

            {/* Feature Card 2 */}

            <motion.div
              whileHover={{
                y: -15,
                rotateX: 8,
                rotateY: -8,
                scale: 1.04,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-2xl mb-6">
                <FaBrain />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                AI Movie Analysis
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Discover hidden viewing habits, personality traits,
                favorite genres, storytelling preferences, and receive
                intelligent recommendations generated by AI.
              </p>

            </motion.div>

            {/* Feature Card 3 */}

            <motion.div
              whileHover={{
                y: -15,
                rotateX: 8,
                rotateY: -8,
                scale: 1.04,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-2xl mb-6">
                <FaMagic />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Cinematic Experience
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Enjoy a premium interface inspired by modern streaming
                platforms with smooth animations, beautiful gradients,
                glassmorphism, and responsive design.
              </p>

            </motion.div>

          </div>

          {/* Why Choose Us */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-28 max-w-5xl text-center"
          >

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}AI Movie Analyzer?
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Experience movie tracking in an entirely new way. Analyze
              your cinematic personality, organize your watchlist, and
              receive recommendations tailored specifically to your taste.
            </p>

          </motion.div>          {/* Final CTA */}

          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-32 w-full max-w-6xl"
          >
            <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-yellow-500/10 backdrop-blur-xl p-12">

              <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">

                <h2 className="text-4xl md:text-6xl font-black mb-6">
                  Ready to Discover Your
                  <span className="block bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                    Cinematic Personality?
                  </span>
                </h2>

                <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
                  Join thousands of movie lovers who are organizing their
                  collections, receiving AI-powered recommendations, and
                  discovering hidden patterns in their movie taste.
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 45px rgba(239,68,68,.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onEnterApp}
                  className="px-12 py-5 rounded-2xl bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-lg font-bold shadow-2xl inline-flex items-center gap-3"
                >
                  <FaPlay />

                  Launch AI Workspace

                  <FaArrowRight />
                </motion.button>

              </div>

            </div>
          </motion.section>

        </main>

        {/* Footer */}

        <footer className="mt-24 border-t border-white/10">

          <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <h2 className="text-2xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                AI Movie Analyzer
              </h2>

              <p className="text-slate-500 mt-2">
                Discover your cinematic personality with Artificial Intelligence.
              </p>

            </div>

            <div className="flex gap-8 text-slate-400">

              <span className="hover:text-white cursor-pointer transition">
                Features
              </span>

              <span className="hover:text-white cursor-pointer transition">
                About
              </span>

              <span className="hover:text-white cursor-pointer transition">
                Contact
              </span>

            </div>

          </div>

          <div className="border-t border-white/10 py-6 text-center text-slate-500 text-sm">

            © {new Date().getFullYear()} AI Movie Analyzer • Designed by
            <span className="text-yellow-400 font-semibold">
              {" "}Roqia Stanikzai
            </span>

          </div>

        </footer>

      </div>

    </div>
  );
}

export default LandingPage;