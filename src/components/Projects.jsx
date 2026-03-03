function Projects() {
  const projects = [
    {
      title: "Issue Tracker System",
      description:
        "Built a real-time Issue Tracker platform enabling college students to communicate efficiently with departments such as food services, infrastructure, electricity, laboratories, and placements. Integrated WebSockets to ensure instant updates and seamless issue resolution.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/SaiSivaRubha/Issue_tracker_app",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Empathy Nexus",
      description:
        "Developed a web platform focused on promoting acts of humanity by allowing users to share positive actions. Implemented a happiness metric module to analyze and visualize community engagement and emotional impact.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/SaiSivaRubha/Empathy_Nexus_web",
      gradient: "from-purple-500 to-blue-400",
    },
    {
      title: "PDF Summarizer",
      description:
        "Built an intelligent PDF summarization and question-answering tool using transformer-based LLMs. Implemented T5-based summarization with LangChain to enable contextual question answering from uploaded documents.",
      tech: ["Python", "Streamlit", "T5", "LangChain"],
      github: "https://github.com/SaiSivaRubha/llm_question_and_answer_pdf",
      gradient: "from-cyan-500 to-blue-400",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6">

      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-500 mb-3 font-medium">What I've Built</p>
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Projects
        </h2>
        <div className="mx-auto mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70" />
      </div>

      {/* Left - Right - Left rows */}
      <div className="max-w-5xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Number block */}
            <div className="flex-shrink-0 w-40 h-40 rounded-2xl
              border border-white/10 bg-white/5
              flex items-center justify-center">
              <span className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${project.gradient}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className={`flex-1 border-l-2 pl-8 ${
              index === 0 ? "border-blue-500/50" :
              index === 1 ? "border-purple-500/50" :
                            "border-cyan-500/50"
            }`}>
              <h3 className={`text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                {project.title}
              </h3>

              <p className="text-gray-300 font-medium leading-relaxed mb-5 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-xs"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white text-sm font-medium transition duration-300"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;