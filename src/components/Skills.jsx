import { useState } from "react";

const BUBBLE_R = 64;
const CHILD_R = 40;
const FAN_DIST = 200;

const skillMap = {
  Programming: ["Python", "C", "Java", "JavaScript"],
  Backend: ["Node.js", "Express", "MongoDB", "SQL"],
  "Machine Learning": ["Deep Learning", "LLMs", "NumPy", "Pandas"],
  Tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
};

const parentPos = {
  Programming: { x: -BUBBLE_R, y: -BUBBLE_R },
  Backend: { x: BUBBLE_R, y: -BUBBLE_R },
  "Machine Learning": { x: -BUBBLE_R, y: BUBBLE_R },
  Tools: { x: BUBBLE_R, y: BUBBLE_R },
};

const fanCenter = {
  Programming: 180,
  Backend: 0,
  "Machine Learning": 180,
  Tools: 0,
};

function getChildPositions(category, total) {
  const spread = 70;
  const center = fanCenter[category];
  const parent = parentPos[category];

  return Array.from({ length: total }, (_, i) => {
    const t = total === 1 ? 0 : i / (total - 1) - 0.5;
    const rad = ((center + t * spread) * Math.PI) / 180;
    return {
      x: parent.x + FAN_DIST * Math.cos(rad),
      y: parent.y + FAN_DIST * Math.sin(rad),
    };
  });
}

export default function Skills() {
  const [active, setActive] = useState(null);

  const W = 820;
  const H = 620;
  const cx = W / 2;
  const cy = H / 2;

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-28 bg-[#0f172a]">

      {/* Clean Title */}
      <h2 className="text-4xl font-bold tracking-widest mb-16 text-cyan-300">
        SKILLS
      </h2>

      <style>{`
        @keyframes electricPulse {
          0%,100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }
      `}</style>

      <div className="relative" style={{ width: W, height: H }}>

        {/* SVG Arrows */}
        <svg className="absolute inset-0 pointer-events-none" width={W} height={H}>
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6"
              refX="8" refY="3" orient="auto">
              <polygon
                points="0 0, 8 3, 0 6"
                fill="#00eaff"
                style={{
                  filter: "drop-shadow(0 0 6px #00eaff) drop-shadow(0 0 14px #00eaff)",
                }}
              />
            </marker>
          </defs>

          {Object.keys(skillMap).map((cat) => {
            const pPos = parentPos[cat];
            const isOpen = active === cat;
            const childPositions = getChildPositions(cat, skillMap[cat].length);

            return childPositions.map((cPos, i) => {
              const dx = cPos.x - pPos.x;
              const dy = cPos.y - pPos.y;
              const dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const ux = dx / dist;
              const uy = dy / dist;

              return (
                <line
                  key={`${cat}-arrow-${i}`}
                  x1={cx + pPos.x + ux * (BUBBLE_R + 4)}
                  y1={cy + pPos.y + uy * (BUBBLE_R + 4)}
                  x2={cx + cPos.x - ux * (CHILD_R + 4)}
                  y2={cy + cPos.y - uy * (CHILD_R + 4)}
                  stroke="#00eaff"
                  strokeWidth="1.8"
                  markerEnd="url(#arrowhead)"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    filter:
                      "drop-shadow(0 0 10px #00eaff) drop-shadow(0 0 25px #00eaff)",
                  }}
                />
              );
            });
          })}
        </svg>

        {/* Bubbles */}
        {Object.keys(skillMap).map((cat) => {
          const pPos = parentPos[cat];
          const isOpen = active === cat;
          const childPositions = getChildPositions(cat, skillMap[cat].length);

          return (
            <div key={cat}>
              <div
                onClick={() => setActive(isOpen ? null : cat)}
                className={`absolute w-32 h-32 text-sm rounded-full z-10
                  flex items-center justify-center text-center px-2
                  cursor-pointer select-none border transition-all duration-300
                  ${
                    isOpen
                      ? "bg-cyan-400/20 border-cyan-300 text-cyan-200 scale-110"
                      : "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:scale-105"
                  }
                  ${isOpen ? "animate-[electricPulse_1.2s_infinite]" : ""}
                `}
                style={{
                  left: cx + pPos.x - BUBBLE_R,
                  top: cy + pPos.y - BUBBLE_R,
                  boxShadow: isOpen
                    ? "0 0 30px #00eaff, 0 0 60px #00eaff, inset 0 0 20px #00eaff"
                    : "0 0 15px #00eaff",
                  textShadow: "0 0 10px #00eaff",
                }}
              >
                {cat}
              </div>

              {skillMap[cat].map((skill, i) => {
                const cPos = childPositions[i];

                return (
                  <div
                    key={skill}
                    className="absolute w-20 h-20 text-xs rounded-full
                      bg-cyan-400/10 border border-cyan-400/50 text-cyan-300
                      flex items-center justify-center text-center px-2 select-none"
                    style={{
                      left: cx + (isOpen ? cPos.x : pPos.x) - CHILD_R,
                      top: cy + (isOpen ? cPos.y : pPos.y) - CHILD_R,
                      opacity: isOpen ? 1 : 0,
                      pointerEvents: isOpen ? "auto" : "none",
                      transition:
                        "left 0.5s ease, top 0.5s ease, opacity 0.4s ease",
                      boxShadow:
                        "0 0 20px #00eaff, 0 0 35px #00eaff, inset 0 0 12px #00eaff",
                      textShadow: "0 0 8px #00eaff",
                    }}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}