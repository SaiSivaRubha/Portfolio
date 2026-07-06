function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 w-full">

        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            Resume
          </h2>

          <p className="text-gray-300 mb-8">
            Here is a preview of my resume. You can download
            the complete PDF using the button below.
          </p>

          <a
            href="/resume.pdf"
            download
            className="w-fit bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side - Image Preview */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/resume_preview.png"
            alt="Resume Preview"
            className="w-full rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Resume;