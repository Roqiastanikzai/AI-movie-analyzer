import { motion } from "framer-motion";
import {
  FaBrain,
  FaMagic,
  FaFilm,
  FaSearch,
  FaRobot,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-5xl text-purple-400" />,
    title: "AI Movie Analysis",
    description:
      "Analyze your movie ratings and reviews to discover your unique cinematic personality.",
  },
  {
    icon: <FaMagic className="text-5xl text-yellow-400" />,
    title: "Smart Recommendations",
    description:
      "Receive intelligent movie recommendations based on your favorite genres and interests.",
  },
  {
    icon: <FaFilm className="text-5xl text-red-400" />,
    title: "Movie Collection",
    description:
      "Build your personal movie library with ratings, reviews, genres and posters.",
  },
  {
    icon: <FaSearch className="text-5xl text-cyan-400" />,
    title: "Discover Movies",
    description:
      "Browse thousands of movies by genre and explore hidden cinematic gems.",
  },
  {
    icon: <FaRobot className="text-5xl text-green-400" />,
    title: "Powered by AI",
    description:
      "Integrated with modern AI models to provide intelligent suggestions and insights.",
  },
  {
    icon: <FaStar className="text-5xl text-orange-400" />,
    title: "Beautiful Experience",
    description:
      "Modern animations, glassmorphism, smooth transitions and a responsive interface.",
  },
];

function FeatureSection() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-black">
          Amazing{" "}
          <span className="bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Features
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6 leading-8">
          Everything you need to organize your movie collection,
          discover amazing films and let AI understand your taste.
        </p>
      </motion.div>

      {/* Feature Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
          >
            <div className="mb-6">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-24 text-center"
      >
        <p className="text-gray-300 text-xl">
          Designed for movie lovers who want more than just a watchlist.
        </p>
      </motion.div>
    </section>
  );
}

export default FeatureSection;