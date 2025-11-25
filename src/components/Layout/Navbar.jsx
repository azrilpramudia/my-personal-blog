// /* eslint-disable react-hooks/set-state-in-effect */
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useDropdownAnimation } from '../../hooks/useDropdownAnimation';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();
  const animate = useDropdownAnimation(open);

  return (
    <nav className="font-poppins w-full bg-(--nav-bg-current) text-(--nav-text-current) transition-colors duration-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b border-(--nav-border-current) px-4 py-4">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-semibold">
            The Daily Dev
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Socials Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/"
              className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-(--nav-text-current) after:transition-all after:duration-300 after:content-[''] hover:text-(--nav-text-current) hover:after:w-full"
            >
              Home
            </Link>

            <Link
              to="/article"
              className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-(--nav-text-current) after:transition-all after:duration-300 after:content-[''] hover:text-(--nav-text-current) hover:after:w-full"
            >
              Article
            </Link>

            <Link
              to="/about"
              className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-(--nav-text-current) after:transition-all after:duration-300 after:content-[''] hover:text-(--nav-text-current) hover:after:w-full"
            >
              About
            </Link>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-1 hover:opacity-70">
            <div key={dark ? 'sun' : 'moon'}>
              {dark ? (
                <Sun size={20} className="theme-icon-enter" />
              ) : (
                <Moon size={20} className="theme-icon-enter" />
              )}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="p-1 hover:opacity-70 md:hidden"
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

      {/* Mobile Dropdown */}
      {animate && (
        <div
          className={`w-full overflow-hidden border-b bg-(--page-bg-current) text-(--page-text-current) shadow-md transition-colors duration-300 md:hidden ${open ? 'dropdown-open' : 'dropdown-close'} `}
        >
          <div className="flex flex-col gap-5 px-4 py-5 text-base">
            <Link
              to="/article"
              onClick={() => setOpen(false)}
              className="underline-offset-4 hover:underline"
            >
              Article
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="underline-offset-4 hover:underline"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
