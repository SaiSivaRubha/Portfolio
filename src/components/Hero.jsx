// import React, { useState } from "react";
// import { Typewriter } from "react-simple-typewriter";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// function Hero() {
//   const [lightOn, setLightOn] = useState(false);

//   return (
//     <div className="relative w-full bg-[#0f172a]">

//       {/* ===================== HERO SECTION ===================== */}
//       <div className="flex flex-col items-center justify-center h-screen relative">

//         {/* Lamp Button */}
//         <button
//           onClick={() => setLightOn(!lightOn)}
//           className="absolute top-10 left-[29%] -translate-x-1/2 hover:scale-110 transition-transform duration-200 z-50"
//         >
//           <svg
//             width="34"
//             height="34"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="#fef08a"
//             strokeWidth="1.8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             style={{
//               filter: lightOn ? "drop-shadow(0 0 10px #fef08a)" : "none",
//               transition: "all 0.3s ease",
//             }}
//           >
//             <circle cx="12" cy="10" r="4" />
//             <path d="M12 2v2" />
//             <path d="M4.93 4.93l1.41 1.41" />
//             <path d="M17.66 6.34l1.41-1.41" />
//             <path d="M2 10h2" />
//             <path d="M20 10h2" />
//             <path d="M9 18h6" />
//             <path d="M12 14v4" />
//           </svg>
//         </button>

//         {/* Spotlight Beam */}
//         {lightOn && (
//           <div
//             className="absolute pointer-events-none"
//             style={{
//               top: "0px",
//               left: "0px",
//               width: "100%",
//               height: "100%",
//               clipPath: "polygon(29% 0%, 62% 100%, 0% 100%)",
//               background: `linear-gradient(
//                 to bottom,
//                 rgba(220,230,255,0.60) 0%,
//                 rgba(200,215,255,0.30) 40%,
//                 transparent 100%
//               )`,
//               filter: "blur(40px)",
//               animation: "flicker 4s ease-in-out infinite",
//             }}
//           />
//         )}

//         <style>{`
//           @keyframes flicker {
//             0%,100% { opacity: 1; }
//             50%     { opacity: 0.92; }
//           }
//         `}</style>

//         {/* Name + Typewriter */}
//         <div className="relative z-10 text-left w-full px-16">
//           <h1 className="text-6xl font-extrabold text-white mb-4">
//             SAI SIVA RUBHA HARI
//           </h1>

//           <h2 className="text-2xl text-blue-400 font-semibold">
//             <Typewriter
//               words={["ML Engineer", "Backend Enthusiast"]}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </h2>
//         </div>
//       </div>

//       {/* ===================== CONNECT SECTION ===================== */}
//       <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-10">

//         <h3 className="text-2xl text-blue-400 font-semibold tracking-wider">
//           Connect With Me
//         </h3>

//         <div className="space-y-6 text-blue-300 text-lg">

//           {/* LinkedIn */}
//           <div className="flex items-center space-x-4 hover:text-blue-400 transition duration-300">
//             <FaLinkedin className="text-2xl" />
//             <a
//               href="https://www.linkedin.com/in/h-sai-siva-rubha-418b7928b/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:underline"
//             >
//               linkedin.com/in/h-sai-siva-rubha-418b7928b
//             </a>
//           </div>

//           {/* GitHub */}
//           <div className="flex items-center space-x-4 hover:text-blue-400 transition duration-300">
//             <FaGithub className="text-2xl" />
//             <a
//               href="https://github.com/SaiSivaRubha"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:underline"
//             >
//               github.com/SaiSivaRubha
//             </a>
//           </div>

//           {/* Email */}
//           <div className="flex items-center space-x-4 hover:text-blue-400 transition duration-300">
//             <FaEnvelope className="text-2xl" />
//             <a
//               href="mailto:saisivarubhakh@gmail.com"
//               className="text-white hover:underline"
//             >
//               saisivarubhakh@gmail.com
//             </a>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default Hero;

import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className="relative w-full bg-[#0f172a]">

      {/* ===================== HERO SECTION ===================== */}
      <div className="flex flex-col items-center justify-center h-screen relative">

        {/* Lamp Button */}
        <button
          onClick={() => setLightOn(!lightOn)}
          className="absolute top-10 left-[29%] -translate-x-1/2 hover:scale-125 transition-all duration-300 z-50 group"
          title={lightOn ? "Turn off spotlight" : "Turn on spotlight"}
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute w-10 h-10 rounded-full bg-yellow-200/10 scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm" />
            <svg
              width="34"
              height="34"
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
          </span>
        </button>

        {/* Spotlight Beam */}
        {lightOn && (
          <div
            className="absolute pointer-events-none"
            style={{
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              clipPath: "polygon(29% 0%, 62% 100%, 0% 100%)",
              background: `linear-gradient(
                to bottom,
                rgba(220,230,255,0.60) 0%,
                rgba(200,215,255,0.30) 40%,
                transparent 100%
              )`,
              filter: "blur(40px)",
              animation: "flicker 4s ease-in-out infinite",
            }}
          />
        )}

        <style>{`
          @keyframes flicker {
            0%,100% { opacity: 1; }
            50%     { opacity: 0.92; }
          }
        `}</style>

        {/* Name + Typewriter */}
        <div className="relative z-10 text-left w-full px-16">
       <h1
  className="text-6xl font-extrabold tracking-wide"
  style={{
    color: "white",
    WebkitTextStroke: "1px #ff00cc",
    textShadow: "0 0 6px #ff00cc, 0 0 12px #ff00cc",
  }}
>
  SAI SIVA RUBHA HARI
</h1>

          <h2 className="text-[1.6rem] text-blue-400 font-medium tracking-widest uppercase">
            <Typewriter
              words={["ML Engineer", "Backend Enthusiast"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </div>
      </div>

      {/* ===================== CONNECT SECTION ===================== */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-10">

        <h3 className="text-2xl text-blue-400 font-semibold tracking-wider">
          Connect With Me
        </h3>

        <div className="space-y-6 text-blue-300 text-lg">

          {/* LinkedIn */}
          <div className="flex items-center space-x-4 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
            <FaLinkedin className="text-2xl" />
            <a
              href="https://www.linkedin.com/in/h-sai-siva-rubha-418b7928b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              linkedin.com/in/h-sai-siva-rubha-418b7928b
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-4 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
            <FaGithub className="text-2xl" />
            <a
              href="https://github.com/SaiSivaRubha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              github.com/SaiSivaRubha
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
            <FaEnvelope className="text-2xl" />
            <a
              href="mailto:saisivarubhakh@gmail.com"
              className="text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              saisivarubhakh@gmail.com
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Hero;