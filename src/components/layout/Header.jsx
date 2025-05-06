import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AUISCLogo from "./AUISC_Logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/events", label: "Events" },
  { path: "/achievements", label: "Achievements" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="w-full px-4 py-3">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={AUISCLogo}
              alt="AUISC Logo"
              className="h-10 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors duration-200 text-base`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 ml-2 rounded-md border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="text-blue-600" size={24} />
            ) : (
              <Menu className="text-blue-600" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden w-full overflow-hidden"
            >
              <div className="flex flex-col space-y-2 py-4 bg-white shadow-md border-t border-gray-200 w-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 ${
                      location.pathname === link.path
                        ? "text-blue-600 font-semibold bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    } transition-all duration-200 rounded-md`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
