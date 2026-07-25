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
import { useState } from "react";
import GlassTitle from "../components/GlassTitle";

function LandingPage({ onEnterApp }) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnterApp}
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
          >
            Sign In
          </motion.button>

        </header>

        {/* ================= Hero Section ================= */}

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

          {/* Glass Title */}

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
          </motion.p>          {/* ================= Buttons ================= */}

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
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl font-semibold"
            >
              Learn More
            
            </motion.button>
             {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
                <motion.div 
                initial={{opacity: 0, scale:0.9 }}
                animate={{opacity:1, scale:1 }}
                className="bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-md w-full text-white relative shadow-2xl"
                >
                  <h3 className="text-xl font-bold mb-4">About Our Movie Analyzer</h3>
                   < p className="text-sm text-gray-300 mb-6 leading-relaxed">
             Uncover the hidden patterns in your viewing habits with our advanced movie analyzer.
             By evaluating your favorite genres, directors, and emotional resonace, our platform builds a hyper-personalized profile of your exact movie taste to show you precisely
             what you should watch next.
             </p>
             <button 
             onClick={() => setIsModalOpen(false)}
             className="w-full py-3 bg-white text-black font-semibold reounded-xl hover:bg-gray-200 transition-colors">
              Close
             </button>
                </motion.div>
                </div>
             )}
          </div>

          {/* ================= Statistics ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 w-full max-w-5xl"
          >

            <div>
              <h2 className="text-4xl font-black text-red-400">10K+</h2>
              <p className="text-slate-400 mt-2">Movies Tracked</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-purple-400">98%</h2>
              <p className="text-slate-400 mt-2">AI Accuracy</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-yellow-400">500+</h2>
              <p className="text-slate-400 mt-2">Recommendations</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-cyan-400">24/7</h2>
              <p className="text-slate-400 mt-2">AI Assistant</p>
            </div>

          </motion.div>

          {/* ================= Features ================= */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28 w-full max-w-6xl">

            {/* Feature 1 */}

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
                Instantly search, edit, rate and manage every film you've
                watched with a clean, elegant interface.
              </p>
            </motion.div>

            {/* Feature 2 */}

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
                Discover hidden viewing habits, favorite genres,
                personality traits and receive intelligent movie
                recommendations generated by AI.
              </p>
            </motion.div>

            {/* Feature 3 */}

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
                platforms with beautiful gradients, glassmorphism and
                smooth animations.
              </p>
            </motion.div>

          </div>

          {/* ================= Why Choose Us ================= */}

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
              Experience movie tracking in an entirely new way.
              Analyze your cinematic personality, organize your
              watchlist and receive recommendations tailored
              specifically to your taste.
            </p>

          </motion.div>          {/* ================= Final CTA ================= */}

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
                  collections, receiving AI-powered recommendations,
                  and discovering hidden patterns in their movie taste.
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

        {/* ================= Footer ================= */}

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

              {/* Features */}

              <div className="relative inline-block">

                <span
                  onClick={() => setShowFeatures(!showFeatures)}
                  className="hover:text-white cursor-pointer transition select-none"
                >
                  Features
                </span>

                {showFeatures && (

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl text-xs min-w-[250px] flex flex-col gap-2 text-left z-50">

                    <div className="font-semibold text-purple-400 border-b border-white/5 pb-2 text-center">
                      App Features
                    </div>

                    <p>
                      <strong className="text-slate-200">
                        AI Personality:
                      </strong>{" "}
                      Learns your movie taste using AI.
                    </p>

                    <p>
                      <strong className="text-slate-200">
                        Smart Collection:
                      </strong>{" "}
                      Organize all your favorite movies.
                    </p>

                    <p>
                      <strong className="text-slate-200">
                        Pattern Finder:
                      </strong>{" "}
                      Discover hidden trends in your watch history.
                    </p>

                  </div>

                )}

              </div>

              {/* About */}

              <div className="relative inline-block">

                <span
                  onClick={() => setShowAbout(!showAbout)}
                  className="hover:text-white cursor-pointer transition select-none"
                >
                  About
                </span>

                {showAbout && (

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl text-xs min-w-[260px] text-center z-50">

                    <div className="font-semibold text-purple-400 border-b border-white/5 pb-2 mb-2">
                      About This App
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      AI Movie Analyzer uses artificial intelligence to
                      understand your movie preferences, identify your
                      favorite genres, and recommend films that match
                      your unique cinematic personality.
                    </p>

                  </div>

                )}

              </div>              {/* Contact */}

              <div className="relative inline-block">

                <span
                  onClick={() => setShowContact(!showContact)}
                  className="hover:text-white cursor-pointer transition select-none"
                >
                  Contact
                </span>

                {showContact && (

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-4 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl text-xs min-w-[240px] text-center z-50">

                    <div className="font-semibold text-purple-400 border-b border-white/5 pb-2 mb-2">
                      Get in Touch
                    </div>

                    <a
                      href="mailto:roqiastanikzai5@gmail.com"
                      className="block text-slate-200 hover:text-purple-400 hover:underline break-all transition"
                    >
                      roqiastanikzai5@gmail.com
                    </a>

                    <a
                      href="tel:0764927235"
                      className="block mt-2 text-slate-300 hover:text-white hover:underline transition"
                    >
                      0764927235
                    </a>

                  </div>

                )}

              </div>

            </div>

          </div>

          {/* Copyright */}

          <div className="border-t border-white/10 py-6 text-center text-slate-500 text-sm">

            © {new Date().getFullYear()} AI Movie Analyzer • Designed by{" "}

            <span className="text-yellow-400 font-semibold">
              Roqia Stanikzai
            </span>

          </div>

        </footer>

      </div>

    </div>
  );
}

export default LandingPage;