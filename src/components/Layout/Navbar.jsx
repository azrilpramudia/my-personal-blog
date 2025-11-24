/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false); // for dropdown animation

  // Theme state management
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

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

  // Handle open state changes for animation
  useEffect(() => {
    if (open) {
      setAnimate(true); // start animation on open
    } else {
      setTimeout(() => setAnimate(false), 250); // wait for close animation
    }
  }, [open]);

  return (
    <nav
      className="
        w-full border-b font-poppins
        bg-(--nav-bg-current)]
        text-(--nav-text-current)
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-semibold">
            The Daily Dev
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="
                relative inline-block
                hover:text-(--nav-text-current)
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 
                after:bg-(--nav-text-current)
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              Home
            </Link>

            <Link
              to="/article"
              className="
                relative inline-block
                hover:text-(--nav-text-current)
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 
                after:bg-(--nav-text-current)
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              Article
            </Link>

            <Link
              to="/about"
              className="
                relative inline-block
                hover:text-(--nav-text-current)
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0
                after:bg-(--nav-text-current)
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              About
            </Link>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-1 hover:opacity-70">
            <div key={dark ? "sun" : "moon"}>
              {dark ? (
                <Sun size={20} className="theme-icon-enter" />
              ) : (
                <Moon size={20} className="theme-icon-enter" />
              )}
            </div>
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden p-1 hover:opacity-70"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <div className="icon-rotate-open">
                <X size={24} />
              </div>
            ) : (
              <div className="icon-rotate-close">
                <Menu size={24} />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {animate && (
        <div
          className={`
            md:hidden 
            w-full 
            bg-(--page-bg-current)
            text-(--page-text-current)
            border-b
            shadow-md
            overflow-hidden
            transition-colors duration-300
            ${open ? "dropdown-open" : "dropdown-close"}
          `}
        >
          <div className="flex flex-col gap-5 text-base py-5 px-4">
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
