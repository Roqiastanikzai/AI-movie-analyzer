import { motion } from "framer-motion";
import {
  FaReact,
  FaRobot,
  FaDatabase,
  FaCode,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const technologies = [
  {
    icon: <FaReact className="text-5xl text-cyan-400" />,
    title: "React",
    description: "Component-based architecture for a fast and modern user experience.",
  },
  {
    icon: <SiTailwindcss className="text-5xl text-sky-400" />,
    title: "Tailwind CSS",
    description: "Responsive and elegant UI built with utility-first styling.",
  },
  {
    icon: <FaRobot className="text-5xl text-yellow-400" />,
    title: "Artificial Intelligence",
    description: "AI analyzes your movie preferences and provides personalized recommendations.",
  },
  {
    icon: <FaDatabase className="text-5xl text-green-400" />,
    title: "OMDb API",
    description: "Fetches movie posters, ratings, plots, genres and other movie details.",
  },
  {
    icon: <SiVite className="text-5xl text-purple-400" />,
    title: "Vite",
    description: "Lightning-fast development environment with instant hot reloading.",
  },
  {
    icon: <FaPaintBrush className="text-5xl text-pink-400" />,
    title: "Framer Motion",
    description: "Beautiful animations and smooth transitions throughout the application.",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-black">
          About The{" "}
          <span className="bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Project
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-4xl mx-auto mt-8 leading-8">
          AI Movie Analyzer is a modern movie companion that helps users
          organize their favorite movies, write reviews, discover new films,
          and understand their cinematic personality using Artificial
          Intelligence.
        </p>
      </motion.div>

      {/* About Card */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <FaRocket className="text-4xl text-yellow-400" />

          <h3 className="text-3xl font-bold">
            What Makes This Project Special?
          </h3>
        </div>

        <p className="text-gray-400 leading-9 text-lg">
          Instead of simply storing your movie list, AI Movie Analyzer
          learns your viewing habits. It analyzes your ratings and reviews,
          recommends movies you'll likely enjoy, and helps you discover
          films from genres you love—all in a clean, modern interface.
        </p>
      </motion.div>

      {/* Technologies */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/20 transition-all"
          >
            <div className="mb-6">
              {tech.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {tech.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Quote */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <p className="text-2xl text-gray-300 italic max-w-3xl mx-auto">
          "Movies tell stories. AI helps you discover the stories you'll love next."
        </p>
      </motion.div>
    </section>
  );
}

export default AboutSection;