import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "resume":
        return <Resume />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex justify-center py-10 relative overflow-hidden">

      {/* Main Card */}
      <div className="w-[90%] bg-[#0f172a]/95 backdrop-blur-xl rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">

        {/* Content */}
        <div className="relative z-10">
          <Navbar
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          />

          <div className="min-h-[75vh] flex items-center">
            {renderSection()}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;