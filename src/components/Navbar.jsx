import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Load theme from localStorage
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme to <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => setDark(!dark);

  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900 dark:text-gray-100 font-poppins">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left + Middle */}
        <div className="flex items-center gap-10">
          {/* Title */}
          <Link to="/" className="text-2xl font-semibold">
            The Daily Dev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-gray-600 dark:text-gray-300">
            <Link
              to="/article"
              className="
                relative inline-block hover:text-black dark:hover:text-white
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-current
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              Article
            </Link>

            <Link
              to="/about"
              className="
                relative inline-block hover:text-black dark:hover:text-white
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-current
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              About
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
          {/* Desktop Social */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="hover:text-black dark:hover:text-white hover:underline underline-offset-4"
            >
              Linkedin
            </a>
            <a
              href="#"
              className="hover:text-black dark:hover:text-white hover:underline underline-offset-4"
            >
              Github
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 hover:opacity-70 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 hover:opacity-70"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t py-4 px-4 bg-white dark:bg-gray-900">
          <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
            <Link
              to="/article"
              onClick={() => setOpen(false)}
              className="hover:underline underline-offset-4"
            >
              Article
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:underline underline-offset-4"
            >
              About
            </Link>

            <a
              href="#"
              onClick={() => setOpen(false)}
              className="hover:underline underline-offset-4"
            >
              Linkedin
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="hover:underline underline-offset-4"
            >
              Github
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
