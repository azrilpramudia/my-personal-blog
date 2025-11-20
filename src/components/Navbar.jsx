import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900 dark:text-gray-100 font-poppins">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left + Middle */}
        <div className="flex items-center gap-10">
          {/* Title */}
          <h1 className="text-2xl font-semibold">The Daily Dev</h1>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
            <Link
              to="/article"
              className="hover:text-black dark:hover:text-white"
            >
              Article
            </Link>
            <Link
              to="/about"
              className="hover:text-black dark:hover:text-white"
            >
              About
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-black dark:hover:text-white">
            Linkedin
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white">
            Github
          </a>

          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="p-1 hover:opacity-70">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
