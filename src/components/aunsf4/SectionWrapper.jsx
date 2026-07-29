import { motion } from "framer-motion";

const SectionWrapper = ({
  id,
  ariaLabelledBy,
  children,
  className = "bg-white",
  alt = false,
}) => (
  <section
    id={id}
    aria-labelledby={ariaLabelledBy}
    className={`py-20 scroll-mt-28 ${alt ? "bg-light-blue-purple/40" : className}`}
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default SectionWrapper;
