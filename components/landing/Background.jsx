import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#040611]">

      {/* Red Glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full bg-red-500/15 blur-[180px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/15 blur-[180px]"
      />

      {/* Yellow Glow */}
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-yellow-400/12 blur-[170px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-20 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[150px]"
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040611]/30 to-[#040611]" />
    </div>
  );
}

export default Background;