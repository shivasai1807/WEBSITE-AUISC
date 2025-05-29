import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const TeamCard = ({ member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden w-[220px] mx-auto relative group"
  >
    {/* Animated border */}
    {/* <div className="absolute inset-0 border-4 border-black-500 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform origin-bottom scale-y-0 group-hover:scale-y-100 z-10" /> */}
    
    <div className="relative h-[260px]">
      <img
        src={member.image || "https://via.placeholder.com/200"}
        alt={member.name}
        className="w-full h-full object-cover"
      />
      {/* Initial text overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white font-medium text-sm">{member.name}</h3>
        {member.role && (
          <p className="text-white/80 text-xs">{member.role}</p>
        )}
      </div>
      {/* Hover overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-lg mb-2">{member.name}</h3>
        {member.role && (
          <p className="text-white/80 text-sm mb-3">{member.role}</p>
        )}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default TeamCard; 