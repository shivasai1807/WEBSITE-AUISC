import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
// import SplitText from "gsap/SplitText"; // Uncomment if you have Club GSAP
import AUISCLogo from "/AUISC_Logo.png";

const navLinks = [
  { path: "/aunsf", label: "AUNSF", isHighlighted: true },
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/events", label: "Events" },
  { path: "/achievements", label: "Achievements" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact" },
];

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <motion.button
    className="outline-none border-none select-none cursor-pointer relative w-12 h-12 flex items-center justify-center md:hidden z-50"
    onClick={toggle}
    aria-label="Toggle menu"
    initial={false}
    animate={isOpen ? "open" : "closed"}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRefs = useRef([]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    gsap.set(navRefs.current, { opacity: 0, y: -50 });
    gsap.to(navRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });
  }, []);

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const sidebarVariants = {
    open: {
      clipPath: "circle(1000px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const handleLinkClick = (path) => {
    // Close menu immediately
    setIsOpen(false);
    // Navigate after a small delay to allow animation to start
    setTimeout(() => {
      navigate(path);
    }, 50);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-light-blue-purple shadow-sm">
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
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                ref={(el) => (navRefs.current[index] = el)}
                to={link.path}
                className={`${
                  link.isHighlighted
                    ? "text-orange-500 font-bold hover:text-orange-600"
                    : location.pathname === link.path
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors duration-200 text-base`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://anurag.edu.in/event-itinerary"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-bright-orange text-white rounded-full font-semibold hover:bg-orange-yellow transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40"
            >
              <motion.div
                className="absolute top-20 left-0 w-full px-4"
                variants={navVariants}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.path);
                      }}
                      className={`block w-full text-left px-4 py-3 ${
                        link.isHighlighted
                          ? "text-orange-500 font-bold bg-orange-50 hover:bg-orange-100"
                          : location.pathname === link.path
                          ? "text-blue-600 font-semibold bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      } transition-all duration-200 rounded-md mb-2`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4"
                >
                  <a
                    href="https://linktr.ee/aunsf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-bright-orange text-white rounded-full font-semibold hover:bg-orange-yellow transition-all duration-300 shadow-lg"
                  >
                    Register Now
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
