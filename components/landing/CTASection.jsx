import { motion } from "framer-motion";
import { FaArrowRight, FaRobot, FaFilm, FaStar } from "react-icons/fa";

function CTASection({ onEnterApp }) {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[40px] bg-gradient-to-br from-red-500/10 via-purple-500/10 to-yellow-500/10 border border-white/10 backdrop-blur-2xl overflow-hidden"
      >
        <div className="p-12 md:p-20 text-center">

          <div className="flex justify-center gap-6 text-5xl mb-8">
            <FaRobot className="text-yellow-400" />
            <FaFilm className="text-red-400" />
            <FaStar className="text-purple-400" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Ready To Discover

            <br />

            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Your Movie Personality?
            </span>

          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-9 max-w-3xl mx-auto mt-8">

            AI Movie Analyzer helps you organize your movie collection,
            discover amazing films, analyze your cinematic taste,
            and receive personalized AI recommendations —
            all in one beautiful application.

          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={onEnterApp}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-black text-lg font-bold shadow-2xl hover:shadow-yellow-500/40 transition"
            >
              Launch Workspace

              <FaArrowRight className="inline ml-3" />
            </motion.button>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="px-10 py-5 rounded-full border border-purple-500 text-white font-semibold hover:bg-purple-500/20 transition"
            >
              Back To Top
            </button>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default CTASection;