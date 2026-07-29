import { motion } from "framer-motion";

const PageNav = ({ links }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="AUNSF 4.0 page sections"
      className="sticky top-[72px] z-40 bg-white/85 backdrop-blur-xl border-b border-blue-100/80 shadow-xs"
    >
      <div className="container mx-auto px-3 sm:px-4 max-w-6xl py-2.5">
        <div className="flex items-center overflow-x-auto gap-2 py-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-start md:justify-center px-1">
          {links.map((link) => (
            <motion.button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-[#0E3B91] bg-blue-50/90 hover:bg-gradient-to-r hover:from-[#0E3B91] hover:to-[#1247B8] hover:text-white border border-blue-100/90 shadow-2xs hover:shadow-md transition-all duration-300 active:scale-95"
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PageNav;
