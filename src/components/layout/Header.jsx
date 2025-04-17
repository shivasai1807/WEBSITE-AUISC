import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AUISCLogo from './AUISC_Logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/events', label: 'Events' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    setIsOpen(false); // Close the menu immediately
  };

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);
  

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
          <img
            src={AUISCLogo}
            alt="AUISC Logo"
            // className="h-7 sm:h-16 md:h-16 lg:h-16 xl:h-26 w-auto object-contain"
            // className="h-10 w-auto sm:h-12 md:h-14 object-contain"
            style={{"height":"4vh",paddingLeft:"0px"}}

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
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-200 text-base`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            onClick={() => {
              if (isOpen) {
                setIsOpen(false); // Close menu if already open
              } else {
                setIsOpen(true); // Open menu if closed
              }
            }}
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4 bg-white rounded-lg shadow-lg mt-2">
                {navLinks.map((link) => (
                  <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {}}
                  className={`px-4 py-2 ${
                    location.pathname === link.path
                      ? 'text-blue-600 font-medium bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  } transition-all duration-200 rounded-md text-base`}
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