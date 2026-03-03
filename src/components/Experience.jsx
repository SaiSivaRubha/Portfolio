function Experience() {
  const experiences = [
    {
      role: "Intern Data Scientist",
      company: "Techvantage AI",
      description: "Worked on customer churn prediction using Logistic Regression and EDA techniques.",
      color: "from-blue-500 to-cyan-400",
      border: "border-blue-500",
      tag: "Data Science",
    },
    {
      role: "Machine Learning Intern",
      company: "eNoah iSolution India Pvt Ltd",
      description: "Working on bank statements using ML algorithms like Hierarchical Agglomerative Clustering and LLM's.",
      color: "from-purple-500 to-blue-400",
      border: "border-purple-500",
      tag: "Machine Learning",
    },
    {
      role: "Research and Development Intern",
      company: "Foviagenx Holdings",
      description: "Worked as a Research and Development intern on Swiss Solar Project and Maersk Project.",
      color: "from-cyan-500 to-purple-400",
      border: "border-cyan-500",
      tag: "R&D",
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-6 flex flex-col items-center justify-center">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-500 mb-3 font-medium">My Journey</p>
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Experience
        </h2>
        <div className="mx-auto mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70" />
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">

        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30 rounded-full" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex gap-8 group">

              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color}
                  flex items-center justify-center text-white font-bold text-lg shadow-lg
                  group-hover:scale-110 transition-transform duration-300`}>
                  {idx + 1}
                </div>
              </div>

              {/* Card */}
              <div className={`flex-1 rounded-2xl border ${exp.border} border-opacity-30
                bg-white/5 backdrop-blur-sm p-6
                hover:bg-white/10 hover:border-opacity-60
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>

                {/* Tag */}
                <span className={`inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full
                  bg-gradient-to-r ${exp.color} text-white font-semibold mb-3 opacity-90`}>
                  {exp.tag}
                </span>

                {/* Role */}
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>

                {/* Company */}
                <p className={`text-sm font-medium mb-3 text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;