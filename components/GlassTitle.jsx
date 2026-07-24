import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

function GlassTitle() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const split = new SplitType(titleRef.current, {
      types: "chars",
    });

    const chars = split.chars || [];

    chars.forEach((char) => {
      char.style.display = "inline-block";
      char.style.willChange = "transform";
    });

    const handleMove = (e) => {
      chars.forEach((char) => {
        const rect = char.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const dx = e.clientX - x;
        const dy = e.clientY - y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 140) {
          gsap.to(char, {
            x: -dx * 0.18,
            y: -dy * 0.18,
            rotation: gsap.utils.random(-15, 15),
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(char, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.4)",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      split.revert();
    };
  }, []);

  return (
    <h2
      ref={titleRef}
      className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto text-center"
    >
      Decode Your{" "}
      <span className="bg-gradient-to-r from-red-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
        Movie Personality
      </span>{" "}
      with AI
    </h2>
  );
}

export default GlassTitle;