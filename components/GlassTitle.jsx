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
      className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-2"
    >
     <div>Decode Your</div>
     {/*Buklletproof SVG Gradient Text */}
     <svg className="w-full h-[1.2rem] max-h-[85px]" viewBox="0 0 800 90">
        <defs>
            <linearGradient id="movieGradient" x1="0%" y1="0%" x2="100%" y2="100%" y2="0%">
                <stop offset="0%" stopColor="#f87171" /> {/*red-400 */}
                <stop offset="50%" stopColor="#c084fc" /> {/*purple-400 */}
                <stop offset="100%" stopColor="#facc15" /> {/*yellow-400 */}
            </linearGradient>
        </defs>
        <text
        x="50%"
        y="70"
        textAnchor="midddle"
        fill="url(#movieGrdaient)"
        className="font-black text-6xl md:text-7xl"
        style={{fontFamily:'inherit'}}>
          <div>Movie Personality </div>  
        </text>
     </svg>
     <div>With AI</div>
     
    </h2>
  );
}

export default GlassTitle;