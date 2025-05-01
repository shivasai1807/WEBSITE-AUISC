import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Our Team
        </motion.h1>
        <p className="text-center text-gray-600 mb-12">Coming ..</p>
      </div>
    </div>
  );
};

export default Team;
