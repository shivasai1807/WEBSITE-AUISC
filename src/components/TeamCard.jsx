import { motion } from "framer-motion";

const TeamCard = ({ member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden w-[220px] mx-auto"
  >
    <div className="relative h-[260px]">
      <img
        src={member.image || "https://via.placeholder.com/200"}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-base font-semibold text-gray-800">{member.name}</h3>
      {member.role && (
        <p className="text-sm text-gray-600 mt-1">{member.role}</p>
      )}
    </div>
  </motion.div>
);

export default TeamCard; 