import { useState } from "react";

const navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white py-2 mb-6 shadow-md">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Logo</div>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop View) */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-600">
          <li>
            <a href="#home" className="hover:text-blue-600 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-600 transition duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition duration-300">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Sidebar (Mobile View) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="text-2xl font-bold text-gray-800">Logo</div>
              <button
                onClick={toggleSidebar}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="mt-4 space-y-4 px-6 text-lg font-medium text-gray-600">
              <li>
                <a
                  href="#home"
                  onClick={toggleSidebar}
                  className="hover:text-blue-600 transition duration-300 block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={toggleSidebar}
                  className="hover:text-blue-600 transition duration-300 block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={toggleSidebar}
                  className="hover:text-blue-600 transition duration-300 block"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={toggleSidebar}
                  className="hover:text-blue-600 transition duration-300 block"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default navbar;
