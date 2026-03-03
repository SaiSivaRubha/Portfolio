import { useState } from "react";

function About() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 relative">

      {/* Light button - top center */}
      <button
        onClick={() => setLightOn(!lightOn)}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-50 hover:scale-110 transition-transform duration-200"
        title={lightOn ? "Turn off spotlight" : "Turn on spotlight"}
      >
        <svg
          width="32" height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fef08a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: lightOn ? "drop-shadow(0 0 10px #fef08a)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <circle cx="12" cy="10" r="4" />
          <path d="M12 2v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
          <path d="M2 10h2" />
          <path d="M20 10h2" />
          <path d="M9 18h6" />
          <path d="M12 14v4" />
        </svg>
      </button>

      {/* Conical beam — sits behind content */}
      {lightOn && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: "28px",           /* just below the lamp head */
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "85%",
            zIndex: 0,
            clipPath: "polygon(50% 0%, 80% 100%, 20% 100%)",
            background: `linear-gradient(
              to bottom,
              rgba(220,230,255,0.65) 0%,
              rgba(200,215,255,0.32) 30%,
              rgba(180,200,240,0.12) 65%,
              transparent 100%
            )`,
            filter: "blur(22px)",
            animation: "flicker 4s ease-in-out infinite",
          }}
        />
      )}

      {/* Lamp head glow source */}
      {lightOn && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "56px",
            height: "10px",
            borderRadius: "4px",
            background: "rgba(254,240,138,0.95)",
            boxShadow: "0 0 20px 8px rgba(254,240,138,0.5)",
            zIndex: 1,
          }}
        />
      )}

      <style>{`
        @keyframes flicker {
          0%,100% { opacity: 1; }
          25%      { opacity: 0.92; }
          50%      { opacity: 1; }
          75%      { opacity: 0.96; }
        }
      `}</style>

      {/* Content */}
      <div className="max-w-3xl w-full text-center relative z-10">

        <p className="text-xs uppercase tracking-[0.3em] text-blue-500 mb-4 font-medium">
          Who I Am
        </p>

        <h2 className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          About Me
        </h2>

        <div className="mx-auto mb-10 h-[2px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70" />

        <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
          I am a{" "}
          <span className="text-blue-300 font-semibold">Machine Learning enthusiast</span>{" "}
          pursuing B.Tech in{" "}
          <span className="text-cyan-300 font-semibold">Artificial Intelligence & Machine Learning</span>{" "}
          with a strong academic record of{" "}
          <span className="text-blue-300 font-semibold">CGPA: 9.22</span>.
          I currently work on real-time ML projects and backend development.
          Apart from this, I have completed all grades in{" "}
          <span className="text-cyan-300 font-semibold">Carnatic Music</span>{" "}
          at Annamalai University.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { label: "CGPA", value: "9.22" },
            { label: "Focus", value: "AI & ML" },
            { label: "Passion", value: "Carnatic Music" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="px-6 py-3 rounded-full border border-blue-400/30 bg-blue-500/10
                text-sm text-blue-300 flex flex-col items-center gap-0.5"
            >
              <span className="text-xs text-gray-400 uppercase tracking-widest">{label}</span>
              <span className="font-semibold text-white">{value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;