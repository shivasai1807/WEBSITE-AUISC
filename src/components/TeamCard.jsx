import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const TeamCard = ({ member }) => {
  // Check if image path is empty or just points to /team_pics
  const hasValidImage = member.image && member.image !== "/team_pics";
  const placeholderImage = "/team_pics/placeholder.webp"; // Custom placeholder image

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden w-[220px] mx-auto relative group"
    >
      {member.role && (
        <div className="absolute top-2 right-2 z-20 overflow-hidden rounded-full">
          <div className="relative bg-dark-blue-purple/90 text-white text-xs px-3 py-1 shadow-lg backdrop-blur-sm">
            <div className="absolute inset-0 shimmer-gradient"></div>
            <span className="relative z-10">{member.role}</span>
          </div>
        </div>
      )}
      
      <div className="relative h-[260px]">
        <img
          src={hasValidImage ? member.image : placeholderImage}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = placeholderImage; // Fallback if image fails to load
          }}
        />
        {/* Initial text overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-white font-medium text-sm">{member.name}</h3>
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
};

export default TeamCard; 