function Navbar({ setActiveSection, activeSection }) {

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "resume"
  ];

  return (
    <nav className="flex justify-end space-x-8 text-gray-300 font-medium mb-10">

      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveSection(item)}
          className={`capitalize transition duration-300 hover:text-blue-400 
            ${activeSection === item ? "text-blue-400 font-semibold" : ""}`}
        >
          {item}
        </button>
      ))}

    </nav>
  );
}

export default Navbar;