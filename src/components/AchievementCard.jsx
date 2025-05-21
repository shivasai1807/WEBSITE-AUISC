import { motion } from "framer-motion";

const AchievementCard = ({ achievement }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
  >
    <div className="absolute top-4 right-4 text-4xl">{achievement.icon}</div>
    <div className="mb-2 text-sm text-gray-500 font-semibold">{achievement.date}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
    <p className="text-gray-600">{achievement.description}</p>
  </motion.div>
);

export default AchievementCard; 