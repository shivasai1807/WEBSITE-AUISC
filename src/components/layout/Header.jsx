import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import AUISCLogo from "/AUISC_Logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  {
    path: "/aunsf",
    label: "AUNSF",
    dropdown: [
      { path: "/aunsf-1", label: "AUNSF 1.0" },
      { path: "/aunsf-2", label: "AUNSF 2.0" },
      { path: "/aunsf-3", label: "AUNSF 3.0" },
      { path: "/aunsf-4", label: "AUNSF 4.0" },
    ],
  },
  { path: "/events", label: "Events" },
  { path: "/epics", label: "EPICS" },
  { path: "/achievements", label: "Achievements" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact" },
];

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#0D47A1"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <motion.button
    className="outline-none border-2 border-[#0D47A1] bg-white cursor-pointer relative w-14 h-14 flex items-center justify-center md:hidden z-50 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
    onClick={toggle}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        animate={{
          d: isOpen
            ? "M 3 16.5 L 17 2.5"
            : "M 2 2.5 L 20 2.5",
          stroke: isOpen ? "#FF5722" : "#0D47A1",
        }}
      />

      <Path
        animate={{
          opacity: isOpen ? 0 : 1,
          stroke: isOpen ? "#FF5722" : "#0D47A1",
        }}
        d="M 2 9.423 L 20 9.423"
      />

      <Path
        animate={{
          d: isOpen
            ? "M 3 2.5 L 17 16.346"
            : "M 2 16.346 L 20 16.346",
          stroke: isOpen ? "#FF5722" : "#0D47A1",
        }}
      />
    </svg>
  </motion.button>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const navRefs = useRef([]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    gsap.fromTo(
      navRefs.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
      }
    );
  }, []);

  const handleLinkClick = (path) => {
    setIsOpen(false);

    setTimeout(() => {
      navigate(path);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">

      <nav className="w-full px-4 py-3">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={AUISCLogo}
              alt="AUISC Logo"
              className="h-12 object-contain"
              whileHover={{
                scale: 1.04,
                rotate: 2,
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">

            {navLinks.map((link, index) => {

              const isAUNSFPage =
                location.pathname.includes("/aunsf");

              const isActive =
                location.pathname === link.path;

              return (
                <div
                  key={link.path}
                  className="relative group"
                  ref={(el) => (navRefs.current[index] = el)}
                >

                  <Link
                    to={link.path}
                    className={`relative text-[15px] font-medium transition-all duration-300 hover:text-[#0D47A1] ${
                      link.label === "AUNSF" && isAUNSFPage
                        ? "text-[#FF5722]"
                        : isActive
                        ? "text-[#0D47A1]"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                        link.label === "AUNSF" && isAUNSFPage
                          ? "bg-[#FF5722] w-full"
                          : isActive
                          ? "bg-[#0D47A1] w-full"
                          : "bg-[#0D47A1] w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                      <div className="w-52 bg-white rounded-2xl shadow-xl border border-gray-100 p-2">

                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                              location.pathname === item.path
                                ? "bg-orange-50 text-[#FF5722]"
                                : "text-gray-700 hover:bg-orange-50 hover:text-[#FF5722]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <MenuToggle
            toggle={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>

          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="md:hidden fixed top-[78px] left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl rounded-b-[2rem] overflow-hidden"
            >

              <div className="px-5 py-6 max-h-[85vh] overflow-y-auto">

                {navLinks.map((link, index) => {

                  const isAUNSFPage =
                    location.pathname.includes("/aunsf");

                  const isActive =
                    location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className="mb-4"
                    >

                      {/* Main Button */}
                      <button
                        onClick={() => {
                          if (link.dropdown) {
                            setOpenDropdown(
                              openDropdown === link.label
                                ? null
                                : link.label
                            );
                          } else {
                            handleLinkClick(link.path);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${
                          link.label === "AUNSF" &&
                          isAUNSFPage
                            ? "bg-orange-50 text-[#FF5722]"
                            : isActive
                            ? "bg-blue-50 text-[#0D47A1]"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >

                        <span>{link.label}</span>

                        {link.dropdown && (
                          <motion.span
                            animate={{
                              rotate:
                                openDropdown === link.label
                                  ? 45
                                  : 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="text-2xl"
                          >
                            +
                          </motion.span>
                        )}
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>

                        {link.dropdown &&
                          openDropdown === link.label && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                              className="overflow-hidden"
                            >

                              <div className="mt-2 ml-1 space-y-2">

                                {link.dropdown.map((item) => (
                                  <motion.button
                                    key={item.path}
                                    whileHover={{
                                      scale: 1.01,
                                      x: 4,
                                    }}
                                    whileTap={{
                                      scale: 0.98,
                                    }}
                                    onClick={() =>
                                      handleLinkClick(item.path)
                                    }
                                    className={`w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                                      location.pathname ===
                                      item.path
                                        ? "bg-orange-50 text-[#FF5722]"
                                        : "bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-[#FF5722]"
                                    }`}
                                  >
                                    {item.label}
                                  </motion.button>
                                ))}

                              </div>
                            </motion.div>
                          )}

                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {/* Register Button */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="mt-8"
                >

                  <Link
                    to="/register"
                    className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-[#D94B2B] to-[#FF5A36] text-white font-bold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                  >
                    Register Now
                  </Link>

                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;